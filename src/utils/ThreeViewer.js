import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export class ThreeViewer {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      modelPath: options.modelPath || '',
      onProgress: options.onProgress || (() => {}),
      onLoad: options.onLoad || (() => {}),
      autoRotateSpeed: options.autoRotateSpeed || 1.5,
      ...options
    };

    this.init();
  }

  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      100
    );
    // Initial camera position (will be adjusted dynamically)
    this.camera.position.set(0, 0, 5);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true // allows CSS background to show through
    });
    
    // Performance limit for mobile
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    this.container.appendChild(this.renderer.domElement);

    // Environment Map for realistic reflections
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // 4. Lighting (Studio Setup - Reduced intensities to prevent blowout)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0001;
    this.scene.add(dirLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0x90b0d0, 0.8);
    fillLight.position.set(-5, 3, -5);
    this.scene.add(fillLight);

    // 5. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.options.autoRotateSpeed;
    
    // Limits
    this.controls.minDistance = 2.5; // Closer zoom
    this.controls.maxDistance = 15; // Max zoom out
    // Removed maxPolarAngle constraint so it can rotate full 360 vertically

    // Allow vertical scrolling on touch devices so page scroll is never trapped
    this.renderer.domElement.style.touchAction = 'pan-y';

    // Pause auto-rotate on interaction
    this.controls.addEventListener('start', () => {
      this.isInteracting = true;
    });
    this.controls.addEventListener('end', () => {
      this.isInteracting = false;
    });

    this.isInteracting = false;
    this.isAutoRotatePaused = false;

    // 6. Resize handling
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.container);

    // 7. Load Model
    if (this.options.modelPath) {
      this.loadModel(this.options.modelPath);
    }

    // 8. Start loop
    this.clock = new THREE.Clock();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  loadModel(path) {
    const loader = new GLTFLoader();
    
    import('three/examples/jsm/loaders/DRACOLoader.js').then(({ DRACOLoader }) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      loader.setDRACOLoader(dracoLoader);

      loader.load(
        path,
        (gltf) => {
          this.model = gltf.scene;

          // Enable shadows for the model
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          // Autocenter and scale
          const box = new THREE.Box3().setFromObject(this.model);
          const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Center the model
        this.model.position.x += (this.model.position.x - center.x);
        this.model.position.y += (this.model.position.y - center.y);
        this.model.position.z += (this.model.position.z - center.z);

        // Scale model to fit within a reasonable unit size (e.g. max dimension = 3)
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 3.5;
        const scale = targetSize / maxDim;
        this.model.scale.setScalar(scale);

        // Add a subtle floating animation offset if desired, but centering is enough
        this.scene.add(this.model);

        // Adjust camera to look at the center
        this.controls.target.set(0, 0, 0);
        this.initialCameraPosition = new THREE.Vector3(0, 0, 5);
        this.camera.position.copy(this.initialCameraPosition);
        
        this.options.onLoad();
      },
      (xhr) => {
        this.options.onProgress(xhr);
      },
      (error) => {
        console.error('An error happened while loading the 3D model:', error);
        this.options.onLoad(); // hide loader anyway on error
      }
    );
    });
  }

  loadNewModel(path) {
    if (this.model) {
      this.scene.remove(this.model);
      this.model.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.isMaterial) {
            this.disposeMaterial(child.material);
          } else if (Array.isArray(child.material)) {
            child.material.forEach(mat => this.disposeMaterial(mat));
          }
        }
      });
      this.model = null;
    }
    
    // reset loader UI
    const loaderEl = document.getElementById('three-loader');
    const progressEl = document.getElementById('three-progress');
    if (loaderEl) {
      loaderEl.style.display = 'flex';
      // force reflow
      void loaderEl.offsetWidth;
      loaderEl.style.opacity = '1';
    }
    if (progressEl) {
      progressEl.textContent = '0%';
    }
    
    this.options.modelPath = path;
    this.loadModel(path);
  }

  onResize() {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Only auto-rotate if not interacting and not explicitly paused
    this.controls.autoRotate = !this.isInteracting && !this.isAutoRotatePaused;
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  // UI Control methods
  toggleAutoRotate() {
    this.isAutoRotatePaused = !this.isAutoRotatePaused;
    return !this.isAutoRotatePaused; // return current playing state
  }

  resetCamera() {
    if (this.initialCameraPosition) {
      this.camera.position.copy(this.initialCameraPosition);
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
  }

  setInteractive(enabled) {
    if (this.controls) {
      this.controls.enabled = enabled;
    }
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.style.pointerEvents = enabled ? 'auto' : 'none';
      this.renderer.domElement.style.touchAction = enabled ? 'none' : 'pan-y';
    }
  }

  setTouchAction(action) {
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.style.touchAction = action;
    }
  }

  dispose() {
    // Cleanup to prevent memory leaks
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    if (this.scene) {
      this.scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.isMaterial) {
            this.disposeMaterial(child.material);
          } else if (Array.isArray(child.material)) {
            child.material.forEach(mat => this.disposeMaterial(mat));
          }
        }
      });
      this.scene.clear();
    }

    if (this.renderer) {
      this.renderer.dispose();
      if (this.container && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
      }
    }

    if (this.controls) {
      this.controls.dispose();
    }
  }

  disposeMaterial(material) {
    material.dispose();
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose();
      }
    }
  }
}
