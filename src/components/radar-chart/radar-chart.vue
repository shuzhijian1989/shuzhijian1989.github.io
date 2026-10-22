<template>
  <canvas v-if="axes.length >= 3" canvas-id="radar" id="radar" class="radar" />
</template>

<script>
export default {
  name: 'RadarChart',
  props: {
    axes: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    axes: {
      deep: true,
      /** 轴变化后重画。少于 3 个轴时不补点。 */
      handler() {
        this.draw()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.draw()
    })
  },
  methods: {
    /** 只画领域模块返回的章节轴。 */
    draw() {
      if (this.axes.length < 3) {
        return
      }
      const context = uni.createCanvasContext('radar', this)
      const size = 280
      const center = size / 2
      const radius = 96
      const total = this.axes.length
      context.clearRect(0, 0, size, size)
      context.setStrokeStyle('#d5e3dc')
      context.setLineWidth(1)
      ;[0.25, 0.5, 0.75, 1].forEach((scale) => {
        context.beginPath()
        this.axes.forEach((axis, index) => {
          const point = this.point(center, radius * scale, index, total)
          if (index === 0) {
            context.moveTo(point.x, point.y)
          } else {
            context.lineTo(point.x, point.y)
          }
        })
        context.closePath()
        context.stroke()
      })
      context.setStrokeStyle('#1f6f5b')
      context.setFillStyle('rgba(31, 111, 91, 0.18)')
      context.beginPath()
      this.axes.forEach((axis, index) => {
        const value = axis.mastery == null ? 0 : axis.mastery
        const point = this.point(center, radius * value, index, total)
        if (index === 0) {
          context.moveTo(point.x, point.y)
        } else {
          context.lineTo(point.x, point.y)
        }
      })
      context.closePath()
      context.fill()
      context.stroke()
      context.setFillStyle('#1c2430')
      context.setFontSize(12)
      this.axes.forEach((axis, index) => {
        const point = this.point(center, radius + 24, index, total)
        context.fillText(axis.name, point.x - 24, point.y)
      })
      context.draw()
    },
    /** 第 index 个轴上的坐标。 */
    point(center, radius, index, total) {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / total
      return {
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle)
      }
    }
  }
}
</script>

<style>
.radar {
  display: block;
  width: 280px;
  height: 280px;
  margin: 8px auto 0;
}
</style>
