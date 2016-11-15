
class PTZBase {
  node: any;
  ptzconfig: any;
  ptzconfigOption: any;
  AbsoluteMove: any;
  ptzstatus: any;
    ContinuousMove: any;

  constructor() {

    this.node = {
      attributes: {
        token: 'ptz_node_token_0',
      },
      Name: 'PTZ Node 0',
      SupportedPTZSpaces: {
        AbsolutePanTiltPositionSpace: [{
          URI: 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
          XRange: {
            Min: -1.0,
            Max: 1.0
          },
          YRange: {
            Min: -1.0,
            Max: 1.0
          }
        }],
        AbsoluteZoomPositionSpace: [{
          URI: 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
          XRange: {
            Min: 0.33,
            Max: 1.0
          }
        }],
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
          URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
          XRange : { 
            Min : 0.0,
            Max : 0.05
          }
        }],
        ZoomSpeedSpace: [{
          URI: 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
          XRange: {
            Min: 0.0,
            Max: 0.07
          }
        }],
      },
      MaximumNumberOfPresets: 255,
      HomeSupported: true,
    };

    this.ptzconfig = {
      attributes: {
        token: 'ptz_config_token_0'
      },

            Name : 'PTZConfig_1',
            UseCount : 0,
            NodeToken : 'ptz_node_token_0',
            DefaultAbsolutePantTiltPositionSpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace',
            DefaultAbsoluteZoomPositionSpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace',
            // DefaultRelativePanTiltTranslationSpace : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace',
            // DefaultRelativeZoomTranslationSpace : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace',
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
              // RelativePanTiltTranslationSpace : [{ 
              //   URI : 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace',
              //   XRange : { 
              //     Min : -1.0,
              //     Max : 1.0
              //   },
              //   YRange : { 
              //     Min : -1.0,
              //     Max : 1.0
              //   }
              // }],
              // RelativeZoomTranslationSpace : [{ 
              //   URI : 'http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace',
              //   XRange : { 
              //     Min : 0.33,
              //     Max : 1.0
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
  
    this.AbsoluteMove = {
      ProfileToken: "ptz_config_token_0",
      Position: {
        PanTilt: {
          attributes: {
            x: 0.0,
            y: 0.0,
            space: 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace'
          }
        },
        Zoom: {
          attributes: {
            x: 1.0,
            space: 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace'
          }
        }
      },
      Speed: {
        PanTilt: {
          attributes: {
            x: 0.05,
            y: 0.05,
            space: 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace'
          }
        },
        Zoom: {
          attributes: {
            x: 0.07,
            space: 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace'
          }
        }
      }
    };

    var date = new Date();

    this.ptzstatus = {
      PTZStatus: {
        Position: {
          PanTilt: {
            attributes: {
              x: 0.0,
              y: 0.0,
              space: 'http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace'
            }
          },
          Zoom: {
            attributes: {
              x: 1.0,
              space: 'http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace'
            }
          }
        },
        MoveStatus: {
          PanTilt: 'UNKNOWN',
          Zoom: 'UNKNOWN'
        },
        Error: "",
        // UtcTime:'2016-05-30T09:30:10-06:00',
        UtcTime: date.toISOString()
        }
      };

      this.ContinuousMove = { 
        ProfileToken : 'token',
        Velocity : { 
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
        Timeout : 'PT1M'
      };
  }
}
export = PTZBase;