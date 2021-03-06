import { LatLon } from "./lat-lon";

export class SegmentInfo {
    coordinates:LatLon[];
    startCoordinate:LatLon;
    endCoordinate:LatLon;
    length:number;
    timeSpent:number;
    
    avgSpeed:number;
    avgAccelY:number;
    standardDeviationFullMeanAccelY:number;
    standardDeviationSegmentMeanAccelY:number;
    avgRmsAccel:number;
    
}
