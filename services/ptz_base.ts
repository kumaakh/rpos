
class PTZBase{
    node:any;
    ptzconfig:any;
    ptzconfigOption:any;

    constructor() {

    this.node = { 
      attributes : {
        token : 'ptz_node_token_0',
      },
      Name : 'PTZ Node 0',
      SupportedPTZSpaces : { 
        ContinuousPanTiltVelocitySpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
          XRange : { 
            Min : -1.0,
            Max : 1.0
          },
          YRange : { 
            Min : -1.0,
            Max : 1.0
          }
        }],
        ContinuousZoomVelocitySpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
          XRange : { 
            Min : 0.33,
            Max : 1.0
          }
        }],
        PanTiltSpeedSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
          XRange : { 
            Min : 0.0,
            Max : 1.0
          }
        }],
        ZoomSpeedSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
          XRange : { 
            Min : 0.0,
            Max : 1.0
          }
        }],
      },
      MaximumNumberOfPresets : 255,
      HomeSupported : true,
    };

    this.ptzconfig = { 
            attributes : {
              token : 'ptz_config_token_0'
            },

            Name : 'PTZConfig_1',
            UseCount : 0,
            NodeToken : 'ptz_node_token_0',
            // DefaultAbsolutePantTiltPositionSpace : '',
            // DefaultAbsoluteZoomPositionSpace : '',
            // DefaultRelativePanTiltTranslationSpace : '',
            // DefaultRelativeZoomTranslationSpace : '',
            DefaultContinuousPanTiltVelocitySpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
            DefaultContinuousZoomVelocitySpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
            DefaultPTZSpeed : { 
              PanTilt : { 
                attributes : {
                  x : 0.05,
                  y : 0.05,
                  space : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace'
                }
              },
              Zoom : { 
                attributes : {
                  x : 0.07,
                  space : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace'
                }
              }
            },
            DefaultPTZTimeout : 'P0Y0M0DT1H',
            PanTiltLimits : { 
              Range : { 
                URI : '',
                XRange : { 
                  Min : -1.0,
                  Max : 1.0
                },
                YRange : { 
                  Min : -1.0,
                  Max : 1.0
                }
              }
            },
            ZoomLimits : { 
              Range : { 
                URI : '',
                XRange : { 
                  Min : 0.33,
                  Max : 1
                }
              }
            },
            Extension : { 
              PTControlDirection : { 
                EFlip : { 
                  Mode : 'OFF'
                },
                Reverse : { 
                  Mode : 'OFF'
                },
                Extension : { }
              },
              Extension : { }
            },
        };

        this.ptzconfigOption = { 
            // attributes : {
            //   PTZRamps : {tt:IntAttrList}
            // },
            Spaces : { 
              // AbsolutePanTiltPositionSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   },
              //   YRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              // AbsoluteZoomPositionSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              // RelativePanTiltTranslationSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   },
              //   YRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              // RelativeZoomTranslationSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              ContinuousPanTiltVelocitySpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
                XRange : { 
                  Min : -1.0,
                  Max : 1.0
                },
                YRange : { 
                  Min : -1.0,
                  Max : 1.0
                }
              }],
              ContinuousZoomVelocitySpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
                XRange : { 
                  Min : 0.33,
                  Max : 1.0
                }
              }],
              PanTiltSpeedSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
                XRange : { 
                  Min : 0.0,
                  Max : 1.0
                },
              }],
              ZoomSpeedSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
                XRange : { 
                  Min : 0.0,
                  Max : 1.0
                },
              }],
                            
              // PanTiltSpeedSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              // ZoomSpeedSpace : [{ 
              //   URI : { xs:anyURI},
              //   XRange : { 
              //     Min : { xs:float},
              //     Max : { xs:float}
              //   }
              // }],
              Extension : { }
            },
            PTZTimeout : { 
              Min : 'PT5S',
              Max : 'P0Y0M0DT1H'
            },
            PTControlDirection : { 
              EFlip : { 
                Mode : [''],
                Extension : { }
              },
              Reverse : { 
                Mode : [''],
                Extension : { }
              },
              Extension : { }
            },
            Extension : { },
        };

    }
    
    

}
export = PTZBase;
