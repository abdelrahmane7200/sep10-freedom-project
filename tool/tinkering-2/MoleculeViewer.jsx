function createLabel(text, position) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    context.fillStyle = '#ffffff';
    context.font = 'bold 24px Montserrat';
    context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8
    });
    const label = new THREE.Sprite(labelMaterial);
    label.position.copy(position);
    label.scale.set(1, 0.25, 1);
    return label;
}

function createAnalyzer() {
    const analyzerGroup = new THREE.Group();
    const bodyGeometry = new THREE.Group();

    // Main body (pistol/wand shape)
    // Main handle section
    const handleGeometry = new THREE.BoxGeometry(0.8, 2, 0.6);
    const handleMaterial = new THREE.MeshPhongMaterial({
        color: 0x808080, // Silver aluminum
        metalness: 0.8,
        roughness: 0.3
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0, -1, 0);

    // Rubberized grip overlay
    const gripGeometry = new THREE.BoxGeometry(0.85, 1.8, 0.65);
    const gripMaterial = new THREE.MeshPhongMaterial({
        color: 0x2a2a2a,
        roughness: 0.9
    });
    const grip = new THREE.Mesh(gripGeometry, gripMaterial);
    grip.position.set(0, -0.9, 0);

    // Main body section
    const mainBodyGeometry = new THREE.BoxGeometry(0.9, 1.5, 0.7);
    const mainBodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x808080,
        metalness: 0.8,
        roughness: 0.2
    });
    const mainBody = new THREE.Mesh(mainBodyGeometry, mainBodyMaterial);
    mainBody.position.set(0, 0.5, 0);

    // Display screen
    const screenGeometry = new THREE.PlaneGeometry(0.7, 0.5);
    const screenMaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        emissive: 0x00ffff,
        emissiveIntensity: 0.2
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.5, 0.36);

    // Create tip group before using it
    const tipGroup = new THREE.Group();
    // Create the sensor array housing
    const sensorArrayGroup = new THREE.Group();
    // Main sensor housing
    const sensorHousingGeometry = new THREE.CylinderGeometry(0.2, 0.25, 0.4, 16);
    const sensorHousingMaterial = new THREE.MeshPhongMaterial({
        color: 0x404040,
        metalness: 0.6
    });
    const sensorHousing = new THREE.Mesh(sensorHousingGeometry, sensorHousingMaterial);
    sensorHousing.rotation.x = Math.PI / 2;
    sensorHousing.position.set(0, 1.2, 0);

    // LED emitters
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const led = new THREE.Mesh(
            new THREE.SphereGeometry(0.03, 8, 8),
            new THREE.MeshPhongMaterial({
                color: 0x00ff00,
                emissive: 0x00ff00,
                emissiveIntensity: 0.5
            })
        );
        led.position.set(
            Math.cos(angle) * 0.15,
            1.2,
            Math.sin(angle) * 0.15
        );
        sensorArrayGroup.add(led);
    }

    // Control buttons
    const buttonGroup = new THREE.Group();
    // Trigger
    const triggerGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.2);
    const triggerMaterial = new THREE.MeshPhongMaterial({ color: 0x2a2a2a });
    const trigger = new THREE.Mesh(triggerGeometry, triggerMaterial);
    trigger.position.set(0, -0.5, 0.3);

    // Navigation dials
    for (let i = 0; i < 2; i++) {
        const dial = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16),
            new THREE.MeshPhongMaterial({ color: 0x404040 })
        );
        dial.rotation.x = Math.PI / 2;
        dial.position.set(-0.2 + (i * 0.4), 0.2, 0.36);
        buttonGroup.add(dial);
    }

    // Battery indicator LEDs
    const batteryIndicator = new THREE.Group();
    for (let i = 0; i < 4; i++) {
        const led = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 8),
            new THREE.MeshPhongMaterial({
                color: i < 3 ? 0x00ff00 : 0xff0000,
                emissive: i < 3 ? 0x00ff00 : 0xff0000,
                emissiveIntensity: 0.5
            })
        );
        led.position.set(-0.15 + (i * 0.1), -0.2, 0.36);
        batteryIndicator.add(led);
    }

    // Add all components to main group
    bodyGeometry.add(handle);
    bodyGeometry.add(grip);
    bodyGeometry.add(mainBody);
    bodyGeometry.add(screen);
    bodyGeometry.add(sensorHousing);
    bodyGeometry.add(sensorArrayGroup);
    bodyGeometry.add(trigger);
    bodyGeometry.add(buttonGroup);
    bodyGeometry.add(batteryIndicator);
    bodyGeometry.add(tipGroup); // Add tipGroup to bodyGeometry

    analyzerGroup.add(bodyGeometry);

    const labels = [
        { text: 'Sensor Array', position: new THREE.Vector3(0, 1.5, 0) },
        { text: 'Display Interface', position: new THREE.Vector3(0, 0.8, 0.5) },
        { text: 'Battery Status', position: new THREE.Vector3(0, -0.2, 0.5) },
        { text: 'Control Dials', position: new THREE.Vector3(0.5, 0.2, 0.5) },
        { text: 'Analysis Tip', position: new THREE.Vector3(0, 1.8, 0.3) }
    ];

    labels.forEach(({ text, position }) => {
        analyzerGroup.add(createLabel(text, position));
    });

    return analyzerGroup;
}

function DeviceViewer() {
    const mountRef = React.useRef(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x383838);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(2, 1, 3);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffd700, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const analyzer = createAnalyzer();
        scene.add(analyzer);

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            analyzer.rotation.y += 0.001;
            renderer.render(scene, camera);
        }

        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
        }

        window.addEventListener('resize', handleResize);
        animate();
        setLoading(false);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="molecule-viewer">
            {loading && (
                <div className="loading">
                    <i className="fas fa-microscope fa-spin"></i>
                    <span>Loading Device Model...</span>
                </div>
            )}
            <div ref={mountRef} className="model-container"></div>
        </div>
    );
}

window.MoleculeViewer = DeviceViewer;
