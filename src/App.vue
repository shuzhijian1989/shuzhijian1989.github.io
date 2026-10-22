<script>
export default {
  onLaunch() {}
}
</script>

<style>
page {
  background: #f4f7f5;
  color: #1c2430;
  font-size: 16px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
}

button {
  margin: 0;
  padding: 0 16px;
  line-height: 48px;
  font-size: 16px;
}

button::after,
uni-button::after {
  border: none !important;
}

.sheet {
  padding-bottom: 16px;
}

.card {
  margin: 12px 16px 0;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e7eeea;
  border-radius: 16px;
}

.muted {
  color: #667085;
  font-size: 14px;
}

.title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.45;
}

.eyebrow {
  display: block;
  margin-bottom: 4px;
  color: #667085;
  font-size: 13px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.status {
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 999px;
  background: #eef1f4;
  color: #667085;
  font-size: 13px;
  line-height: 20px;
}

.status.is-doing {
  background: #e7f3ef;
  color: #1f6f5b;
}

.status.is-done {
  background: #e5f4ea;
  color: #1d7a45;
}

.status.is-skip {
  background: #f2f4f3;
  color: #98a2b3;
}

.status.is-weak {
  background: #fbf1e6;
  color: #9a5b16;
}

.mastery-text {
  display: block;
  margin-top: 8px;
}

.mastery-track {
  height: 6px;
  margin-top: 10px;
  border-radius: 999px;
  background: #e6eeea;
  overflow: hidden;
}

.mastery-track__bar {
  height: 100%;
  border-radius: 999px;
  background: #1f6f5b;
}

.mastery-track__bar.is-weak {
  background: #c4843a;
}

.mastery-track__bar.is-done {
  background: #2f8f62;
}

.meter {
  height: 4px;
  margin-top: 10px;
  border-radius: 999px;
  background: #e6eeea;
  overflow: hidden;
}

.meter__bar {
  height: 100%;
  border-radius: 999px;
  background: #1f6f5b;
}

.question {
  margin-top: 16px;
  font-size: 18px;
  line-height: 1.6;
}

.option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 10px;
  padding: 14px 12px;
  border: 1px solid #e1e8e4;
  border-radius: 14px;
  background: #ffffff;
  box-sizing: border-box;
}

.option__key {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #e7f3ef;
  color: #1f6f5b;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  flex-shrink: 0;
}

.option__text {
  flex: 1;
  line-height: 1.5;
}

.option--on {
  border-color: #1f6f5b;
  background: #f3faf7;
}

.option--on .option__key {
  background: #1f6f5b;
  color: #ffffff;
}

.bottom-bar {
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  background: #ffffff;
  border-top: 1px solid #e7eeea;
}

.primary {
  height: 48px;
  line-height: 48px;
  background: #1f6f5b;
  color: #ffffff;
  border-radius: 14px;
  font-weight: 600;
}

.primary[disabled] {
  opacity: 0.45;
}

.ghost {
  flex: 1;
  height: 48px;
  line-height: 48px;
  background: #e7f3ef;
  color: #1f6f5b;
  border-radius: 14px;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 12px;
}

.actions .primary {
  flex: 1;
  width: auto;
}

.link {
  color: #1f6f5b;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
}

.record {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #eef3f1;
}

.record:first-child {
  padding-top: 0;
}

.record:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.record__dot {
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 4px;
  background: #1f6f5b;
  flex-shrink: 0;
}

.stack-item {
  margin-top: 14px;
}

.record-list {
  margin-top: 4px;
}
</style>
