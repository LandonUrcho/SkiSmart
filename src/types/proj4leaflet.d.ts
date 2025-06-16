declare module 'proj4leaflet' {
    import * as L from 'leaflet';

    namespace Proj {
        class CRS extends L.CRS {
            constructor(
                code: string,
                proj4def: string,
                options?: CRSOptions
            );

            // Required methods for compatibility with L.CRS
            latLngToPoint(latlng: L.LatLngExpression, zoom: number): L.Point;
            pointToLatLng(point: L.PointExpression, zoom: number): L.LatLng;
            project(latlng: L.LatLngExpression): L.Point;
            unproject(point: L.PointExpression): L.LatLng;
            wrapLatLng(latlng: L.LatLng): L.LatLng;
            infinite: boolean; // CRS must specify whether it allows infinite scrolling

            // Additional required properties and methods
            scale(zoom: number): number; // Returns scale factor for a given zoom level
            zoom(scale: number): number; // Returns zoom level for a given scale factor
            getProjectedBounds(zoom: number): L.Bounds; // Returns bounds for the given zoom level
            distance(latlng1: L.LatLngExpression, latlng2: L.LatLngExpression): number; // Calculates distance between two points
        }

        interface CRSOptions extends L.CRSOptions {
            resolutions?: number[];
            origin?: [number, number];
        }
    }

    export = Proj;
}
