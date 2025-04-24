function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('software');

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const software = document.getElementById('softwareSection');
            const hardware = document.getElementById('hardwareSection');
            const future = document.getElementById('futureTech');
            const scrollPosition = window.scrollY + 100;

            if (future && scrollPosition >= future.offsetTop) {
                setActiveSection('future');
            } else if (hardware && scrollPosition >= hardware.offsetTop) {
                setActiveSection('hardware');
            } else {
                setActiveSection('software');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={`navbar navbar-dark navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-flask me-2"></i>
                    Chemistry Technology
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'software' ? 'active' : ''}`}
                               href="#softwareSection"
                               onClick={(e) => handleNavClick(e, 'softwareSection')}>
                                <i className="fas fa-laptop-code me-1"></i> Software
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'hardware' ? 'active' : ''}`}
                               href="#hardwareSection"
                               onClick={(e) => handleNavClick(e, 'hardwareSection')}>
                                <i className="fas fa-microchip me-1"></i> Hardware
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'future' ? 'active' : ''}`}
                               href="#futureTech"
                               onClick={(e) => handleNavClick(e, 'futureTech')}>
                                <i className="fas fa-rocket me-1"></i> Future Tech
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <i className="fas fa-atom me-2"></i>
                        Exploring the Future of Chemical Analysis
                    </span>
                </div>
            </div>
        </nav>
    );
}

function SoftwareSection({ software }) {
    return (
        <div id="softwareSection" className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#softwareCollapse">
                    <i className="fas fa-laptop-code me-2"></i>
                    Software Tools
                    <span className="badge bg-warning ms-2">{software.length}</span>
                </button>
            </h2>
            <div id="softwareCollapse" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {software.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <i className="fas fa-code me-2"></i>
                                        {item.name}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.url} className="btn btn-primary stretched-link" target="_blank">
                                            <i className="fas fa-external-link-alt me-2"></i>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HardwareSection({ hardware }) {
    return (
        <div id="hardwareSection" className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hardwareCollapse">
                    <i className="fas fa-microchip me-2"></i>
                    Hardware Tools
                    <span className="badge bg-warning ms-2">{hardware.length}</span>
                </button>
            </h2>
            <div id="hardwareCollapse" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {hardware.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <i className="fas fa-tools me-2"></i>
                                        {item.name}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                        {item.url && (
                                            <a href={item.url} className="btn btn-primary stretched-link" target="_blank">
                                                <i className="fas fa-external-link-alt me-2"></i>
                                                Learn More
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FutureTech() {
    return (
        <div id="futureTech" className="future-tech">
            <div className="alert alert-info">
                <i className="fas fa-lightbulb me-2"></i>
                Exploring next-generation chemical analysis technology
            </div>

            <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">
                        <i className="fas fa-microscope me-2"></i>
                        Compound Analyzer
                    </h3>
                </div>
                <div className="card-body">
                    <p className="lead">
                        An advanced device that combines infrared technology with spectroscopy to analyze chemical compositions in real-time.
                    </p>
                </div>
            </div>

            <div className="table-responsive mb-4">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Component</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Sensor Array</strong></td>
                            <td>Multiple sensors that emit specific wavelengths of light (infrared, near-infrared, ultraviolet, etc.) and detect the resulting absorption/reflection spectra.</td>
                        </tr>
                        <tr>
                            <td><strong>Spectrometer</strong></td>
                            <td>A device that analyzes the light spectrum reflected or emitted by the object to identify molecular vibrations, which are unique to each compound.</td>
                        </tr>
                        <tr>
                            <td><strong>Database of Spectra</strong></td>
                            <td>Preloaded reference data of known substances and their unique spectral fingerprints for comparison.</td>
                        </tr>
                        <tr>
                            <td><strong>Processing Unit</strong></td>
                            <td>Advanced algorithms to compare the detected spectrum with the reference database and deduce the exact chemical composition.</td>
                        </tr>
                        <tr>
                            <td><strong>Display Interface</strong></td>
                            <td>A screen that shows the compound's name, composition breakdown, and other relevant information.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">How Components Work Together</h5>
                    <p className="card-text">
                        The device emits light at the surface of the material being tested. The material absorbs and reflects light in a way that is characteristic of its molecular structure. The sensor detects the reflected light and passes it through a spectrometer. The spectrometer analyzes the light's wavelength and intensity, which corresponds to specific molecular bonds and elements in the material. The device compares the detected data with a database of known compounds to identify the material or compound with high accuracy.
                    </p>
                </div>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#challengesCollapse">
                            <i className="fas fa-exclamation-triangle me-2"></i>
                            Challenges & Limitations
                        </button>
                    </h2>
                    <div id="challengesCollapse" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <ul>
                                <li>Complexity of Spectral Data Analysis</li>
                                <li>High Development and Manufacturing Costs</li>
                                <li>Regular Calibration Requirements</li>
                                <li>Material Detection Limitations</li>
                                <li>Extensive Data Storage Requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="copyright">
            <div className="footer-content">
                <p>Made with <i className="fas fa-code"></i> using
                    <a href="https://react.dev" target="_blank" className="react-link">
                        <i className="fab fa-react react-icon"></i> React
                    </a>
                </p>
            </div>
        </footer>
    );
}

function App() {
    const software = [
        {
            name: "ChemDraw",
            description: "Professional tool for drawing chemical structures, converting to IUPAC names, 3D rendering, reaction mechanism annotations, and chemical database integration.",
            url: "https://revvitysignals.com/products/research/chemdraw"
        },
        {
            name: "Avogadro",
            description: "Open-source 3D molecule building and visualization tool with real-time editing, quantum mechanical calculations, and molecular dynamics simulations.",
            url: "https://avogadro.cc/"
        },
        {
            name: "ChemDoodle",
            description: "Creates publication-quality chemical drawings with web sketcher, NMR simulation, spectral analysis, and structure-to-name conversion capabilities.",
            url: "https://www.chemdoodle.com/3d"
        },
        {
            name: "Gaussian",
            description: "Advanced computational chemistry modeling tool for DFT calculations, chemical reactions simulation, and molecular property predictions.",
            url: "https://gaussian.com/gaussian16/"
        },
        {
            name: "PyMOL",
            description: "3D molecular visualization tool for protein structure analysis, high-quality molecular graphics, and animations used in academic and pharmaceutical research.",
            url: "#"
        }
    ];

    const hardware = [
        {
            name: "Volumetric Flasks",
            description: "Very precise volume measurement tools essential for creating diluted solutions from concentrated stock.",
            url: "https://www.coleparmer.com/c/volumetric-flasks"
        },
        {
            name: "Analytical Balance",
            description: "Provides highly accurate mass measurements to 0.0001 grams, essential for precise weighing and quantitative analyses. Features advanced capabilities like draft shields.",
            url: "https://www.fishersci.com/us/en/browse/90134103/analytical-balances"
        },
        {
            name: "Distillation Apparatus",
            description: "Complex system for heating, monitoring, cooling, and collecting purified liquids. Used in food processing, essential oil extraction, and production of distilled products.",
            url: "https://www.britannica.com/technology/distillation"
        },
        {
            name: "NMR Tubes",
            description: "Specialized equipment for determining molecular structures and dynamics. Essential for organic compound analysis and achieving reproducible experimental results.",
            url: "https://www.britannica.com/science/nuclear-magnetic-resonance"
        }
    ];

    return (
        <div>
            <div className="particle-layer-2"></div>
            <div className="particle-layer-3"></div>
            <Navbar />
            <div className="container">
                <h1 className="text-center mb-4">Chemistry</h1>
                <div className="overview mb-4">
                    <p>Chemistry is a very important topic to all humans; it's used for medicine, the understanding of the universe, living beings, and more. But huge advancements in chemistry wouldn't have happened without technology, which is why we'll explore the importance of it through present examples and future possibilities.</p>
                </div>

                <div className="accordion mb-4">
                    <SoftwareSection software={software} />
                    <HardwareSection hardware={hardware} />
                </div>

                <FutureTech />
            </div>
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
