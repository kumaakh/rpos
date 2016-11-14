
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
        AbsolutePanTiltPositionSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
          XRange : { 
            Min : -1.0,
            Max : 1.0
          },
          YRange : { 
            Min : -1.0,
            Max : 1.0
          }
        }],
        AbsoluteZoomPositionSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
          XRange : { 
            Min : 0.33,
            Max : 1.0
          }
        }],
        PanTiltSpeedSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
          XRange : { 
            Min : 0.0,
            Max : 0.05
          }
        }],
        ZoomSpeedSpace : [{ 
          URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
          XRange : { 
            Min : 0.0,
            Max : 0.07
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
            DefaultAbsolutePantTiltPositionSpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
            DefaultAbsoluteZoomPositionSpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
            DefaultRelativePanTiltTranslationSpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace',
            DefaultRelativeZoomTranslationSpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace',
            DefaultContinuousPanTiltVelocitySpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace',
            DefaultContinuousZoomVelocitySpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace',
            DefaultPTZSpeed : { 
              PanTilt : { 
                attributes : {
                  x : 0.05,
                  y : 0.05,
                  space : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace'
                }
              },
              Zoom : { 
                attributes : {
                  x : 0.07,
                  space : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace'
                }
              }
            },
            DefaultPTZTimeout : 'P0Y0M0DT1H',
            PanTiltLimits : { 
              Range : { 
                URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
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
                URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
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
              // ContinuousPanTiltVelocitySpace : [{ 
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
              // ContinuousZoomVelocitySpace : [{ 
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
              AbsolutePanTiltPositionSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
                XRange : { 
                  Min : -1.0,
                  Max : 1.0
                },
                YRange : { 
                  Min : -1.0,
                  Max : 1.0
                }
              }],
              AbsoluteZoomPositionSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
                XRange : { 
                  Min : 0.33,
                  Max : 1.0
                }
              }],
              PanTiltSpeedSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
                XRange : { 
                  Min : 0.0,
                  Max : 0.05
                },
              }],
              ZoomSpeedSpace : [{ 
                URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
                XRange : { 
                  Min : 0.0,
                  Max : 0.07
                },
              }],
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
