
<script>
import { mixins, HorizontalBar } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes:[{
            ticks: {
              min: 0,
            }
          }],
          yAxes:[{
            gridLines: {
              display:false
            },
            barPercentage: 0.4
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async mounted() {
    await this.renderChart(this.chartData, this.options);
  }
}
</script>