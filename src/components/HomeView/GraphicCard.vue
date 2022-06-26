<template>

  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />

</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
ChartJS.register(Title, Tooltip, LineElement, CategoryScale, PointElement, LinearScale);

export default {
    name: 'LineChart',
    components: { Line },
    props: {
        variacion: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: 'default'
        },
        dataArray: {
            type: Array,
            default: () => {}
        },
        chartId: {
        type: String,
        default: 'line-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 290
        },
        height: {
        type: Number,
        default: 200
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Array,
        default: () => {}
        }
    },
    data() {
        return {
        chartData: {
            labels: this.dataArray.map(elem => ''),
            datasets: [
                {
                    data: this.dataArray,
                    label: this.name,
                    borderColor: (this.variacion >= 0)? '#00ff00' : '#ff0000',
                }
            ]
        },
        chartOptions: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: false,
                },
                x: {
                    display: false,
                }},
            radius: 0,
            },
        }
    }
}
</script>