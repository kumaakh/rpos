interface nodes{
    PTZNode: node[];
}

interface node {
    attributes: Attributes;
    Name: string;
    SupportedPTZSpaces: PTZSpaces;
    MaximumNumberofPresets: number;
    HomeSupported: boolean;
    AuxiliaryCommands: string[];
    Extension: PTZNodeExtension;
}

interface PTZNodeExtension {
    SupportedPresetTour: PTZPresetTourSupported;
    Extension: any;
}

interface PTZPresetTourSupported {
    MaximumNumberOfPresetTours: number;
    PTZPresetTourOperation: string[];
    Extension: any;
}

interface Attributes {
    token : string;
    FixedHomePosition : boolean;
}

interface PTZSpaces {
    AbsolutePanTiltPositionSpace : PanTiltPTVSpace[];
    RelativePanTiltTranslationSpace : PanTiltPTVSpace[];
    ContinuousPanTiltVelocitySpace : PanTiltPTVSpace[];
    AbsoluteZoomPositionSpace : ZoomPTVSpace[];
    RelativeZoomTranslationSpace : ZoomPTVSpace[];
    ContinuousZoomVelocitySpace : ZoomPTVSpace[];
    PanTiltSpeedSpace: ZoomPTVSpace[];
    ZoomSpeedSpace: ZoomPTVSpace[];
    Extension: any;
}

interface PanTiltPTVSpace {
    URI: string;
    XRange: XRange;
    YRange: YRange;
}

interface ZoomPTVSpace {
    URI: string;
    XRange: XRange;
}

interface XRange {
    Min: number;
    Max: number;
}

interface YRange {
    Min: number;
    Max: number;
}

interface ptzConfigurations {
    PTZ
}
