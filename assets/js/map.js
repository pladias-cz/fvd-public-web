import {FVD} from 'pladias-geoservices/src/geo/known_polygons';
import {FVD as FVDLayers, layers as tiledLayers} from "pladias-geoservices/src/layers/tile_layers";
import {layers as vectorLayers} from "pladias-geoservices/src/layers/vector_layers";
import {PladiasMap} from 'pladias-geoservices/src/PladiasMap'
import controls from "pladias-geoservices/src/controls";
import $ from 'jquery';

export default function createMap() {
    let mapElement = document.querySelector('#map');

    if (mapElement !== null) {
        let taxon = mapElement.dataset.taxon;
        let baseLayers = tiledLayers.osm(true);
        let openTopo = tiledLayers.openTopo(false);
        let vectorSquares = vectorLayers.squaresFvdVector(true);
        let region = tiledLayers.regionFvd(true);

        let timeBorderline = function () { return FVDLayers.timeBoundary(false, taxon, document.querySelector("#timeBorderlineSlider").value)};
        let timeLayer = timeBorderline();
        // let layers = [baseLayers, vectorSquares, region, timeLayer];

        let distributionAggregated =  FVDLayers.distributionAggregated(true,taxon);
        let layers = [baseLayers, openTopo, vectorSquares, region, distributionAggregated, timeLayer];

        let viewOptions = {
            center: FVD.centroidOL(),
            zoom: 8.88,
            maxZoom: 16,
            minZoom: 7
        };
        /* MAP */
        const map = new PladiasMap('map', layers, viewOptions, controls);
        map.setTaxonId(taxon)
            .highlightSquare();

        //TOGGLE LAYERS

        $('#grid').change(function () {
            vectorSquares.setVisible(this.checked);
        });

        $('#timeboundary_layer .btn').click(function () {
            $('#timeboundary_layer').toggleClass('d-none');
            $('#semafor_layer').toggleClass('d-none');
            timeLayer.setVisible(!timeLayer.getVisible());
            distributionAggregated.setVisible(!distributionAggregated.getVisible());

        });

        $('#semafor_layer .btn').click(function () {
            $('#timeboundary_layer').toggleClass('d-none');
            $('#semafor_layer').toggleClass('d-none');
            timeLayer.setVisible(!timeLayer.getVisible());
            distributionAggregated.setVisible(!distributionAggregated.getVisible());

        });

        $("#baseLayerOSM, #baseLayerOpenTopo").change(function () {
             baseLayers.setVisible(!baseLayers.getVisible());
             openTopo.setVisible(!openTopo.getVisible());
        });


        //timeBordeline slider for map
        let rangeSlider = function () {
            let sliderBox = $('.range-slider');

            sliderBox.each(function () {
                    let slider = $(this).find('input');
                    let info = $(this).find('span');
                    info.html(slider.attr('value'));

                slider.on('input', function () {
                    info.html(document.querySelector("#timeBorderlineSlider").value);
                    map.getOLMap().removeLayer(timeLayer);
                    timeLayer = timeBorderline();
                    map.getOLMap().addLayer(timeLayer);
                    timeLayer.setVisible(true);
                });
            });
        };

        rangeSlider();

    }


}
