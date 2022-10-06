import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground (){

  const particlesInit = async (engine) => {
    // console.log(engine);
   
    await loadFull(engine);
  };

  return (
    <Particles
    id="tsparticles"
      init = {particlesInit}

      options = {{
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#000"
          },
          "image": "",
          "position": "",
          "repeat": "",
          "size": "",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "fullScreen": {
          "enable": true,
          "zIndex": -1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": false,
              "mode": []
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": false,
              "mode": [],
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 100,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 0
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": true,
          "reduce": {
            "factor": 2,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": true,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#fff",
            "animation": {
              "h": {
                "count": 0,
                "enable": true,
                "offset": 0,
                "speed": 100,
                "decay": 0,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "decay": 0,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "decay": 0,
                "sync": true
              }
            }
          },
          "groups": {
            "z5000": {
              "number": {
                "value": 70
              },
              "zIndex": {
                "value": 50
              }
            },
            "z7500": {
              "number": {
                "value": 30
              },
              "zIndex": {
                "value": 75
              }
            },
            "z2500": {
              "number": {
                "value": 50
              },
              "zIndex": {
                "value": 25
              }
            },
            "z1000": {
              "number": {
                "value": 40
              },
              "zIndex": {
                "value": 10
              }
            }
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 3000,
                "y": 3000
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "mode": "percent",
              "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": false,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 2,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": true,
              "length": 2,
              "fillColor": {
                "value": "#141414"
              }
            },
            "vibrate": true,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 200
          },
          "opacity": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0.1,
              "max": 1
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 10,
              "decay": 0,
              "sync": false,
              "destroy": "none",
              "startValue": "random"
            }
          },
          "reduceDuplicates": false,
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": false,
              "minimumValue": 1
            },
            "value": 1,
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 20,
              "decay": 0,
              "sync": false,
              "destroy": "none",
              "startValue": "random"
            }
          },
          "stroke": {
            "width": 0
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 20
          },
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": true,
                "minimumValue": 2
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true,
              "particles": {}
            }
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": true,
              "value": 20
            },
            "mode": "vertical",
            "speed": 25
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": {
              "angle": 50,
              "move": 10
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 100,
            "enable": false,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#000"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "smooth": false,
        "style": {},
        "themes": [],
        "zLayers": 100,
        "emitters": []
      }
      }
    />
  );
};
