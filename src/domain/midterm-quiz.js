/**
 * 一年级上册期中逐题练习。语文 20 题、数学 20 题。
 * 接口尚未提供，题目写死。页面一次只渲染当前这一题。
 * TODO: 接口地址未提供。接入后替换本文件，页面仍使用 subject、no、stem、options、answer 这些字段。
 */

export const quizQuestions = [
  { subject: '语文', no: 1, total: 20, type: '选择题', topic: '声母', score: 5, grade: 'choice', stem: '「爸」的声母是哪一个？', options: [{ key: 'A', text: 'b' }, { key: 'B', text: 'p' }, { key: 'C', text: 'd' }], answer: 'A', explain: '爸的声母是 b。b 的肚子朝右边。', praise: '你把 b 和 d 分开了。' },
  { subject: '语文', no: 2, total: 20, type: '选择题', topic: '韵母', score: 5, grade: 'choice', stem: '「妈」的韵母是哪一个？', options: [{ key: 'A', text: 'a' }, { key: 'B', text: 'o' }, { key: 'C', text: 'e' }], answer: 'A', explain: '妈是 m 加上 a，韵母是 a。', praise: '韵母 a 你读对了。' },
  { subject: '语文', no: 3, total: 20, type: '选择题', topic: '拼读', score: 5, grade: 'choice', stem: 'wǒ 是哪个字？', options: [{ key: 'A', text: '我' }, { key: 'B', text: '鸟' }, { key: 'C', text: '月' }], answer: 'A', explain: 'wǒ 拼出来就是「我」。', praise: '这个拼音你拼对了。' },
  { subject: '语文', no: 4, total: 20, type: '选择题', topic: '标调', score: 5, grade: 'choice', stem: '「妈」是第几声？', options: [{ key: 'A', text: '第一声' }, { key: 'B', text: '第二声' }, { key: 'C', text: '第三声' }], answer: 'A', explain: '妈读 mā，是第一声。', praise: '第一声你听出来了。' },
  { subject: '语文', no: 5, total: 20, type: '看拼音写词语', topic: '看拼音写词语', score: 5, grade: 'fill', stem: '看拼音，写出词语：mā ma', accepts: ['妈妈'], answer: '妈妈', explain: 'mā ma 写成「妈妈」。', praise: '妈妈两个字都写对了。' },
  { subject: '语文', no: 6, total: 20, type: '选择题', topic: '笔画', score: 5, grade: 'choice', stem: '「人」字一共有几笔？', options: [{ key: 'A', text: '1笔' }, { key: 'B', text: '2笔' }, { key: 'C', text: '3笔' }], answer: 'B', explain: '人是撇和捺，一共两笔。', praise: '你数对了，人是两笔。' },
  { subject: '语文', no: 7, total: 20, type: '选择题', topic: '笔顺', score: 5, grade: 'choice', stem: '「十」先写哪一笔？', options: [{ key: 'A', text: '横' }, { key: 'B', text: '竖' }, { key: 'C', text: '撇' }], answer: 'A', explain: '十是先横后竖。', praise: '先横后竖，你记得很清楚。' },
  { subject: '语文', no: 8, total: 20, type: '选字填空', topic: '选字填空', score: 5, grade: 'choice', stem: '天上有（　　）。', options: [{ key: 'A', text: '日' }, { key: 'B', text: '目' }, { key: 'C', text: '口' }], answer: 'A', explain: '日是太阳。目是眼睛，不能挂在天上。', praise: '日和目你分清了。' },
  { subject: '语文', no: 9, total: 20, type: '量词', topic: '量词', score: 5, grade: 'choice', stem: '一（　　）鸟。', options: [{ key: 'A', text: '只' }, { key: 'B', text: '条' }, { key: 'C', text: '张' }], answer: 'A', explain: '小鸟用「只」，一只鸟。', praise: '量词「只」你用对了。' },
  { subject: '语文', no: 10, total: 20, type: '词语搭配', topic: '词语搭配', score: 5, grade: 'choice', stem: '苹果又大又（　　）。', options: [{ key: 'A', text: '圆' }, { key: 'B', text: '飞' }, { key: 'C', text: '走' }], answer: 'A', explain: '苹果可以说又大又圆。', praise: '这两个词搭在一起很合适。' },
  { subject: '语文', no: 11, total: 20, type: '反义词', topic: '反义词', score: 5, grade: 'choice', stem: '「大」的反义词是哪一个？', options: [{ key: 'A', text: '小' }, { key: 'B', text: '多' }, { key: 'C', text: '上' }], answer: 'A', explain: '大和小是一对反义词。', praise: '大对小，你记得很牢。' },
  { subject: '语文', no: 12, total: 20, type: '连词成句', topic: '连词成句', score: 5, grade: 'fill', stem: '把词排成一句话：我　　爱　　妈妈', accepts: ['我爱妈妈', '我爱妈妈。'], answer: '我爱妈妈。', explain: '先说谁，再说爱妈妈。', praise: '这句话排得很顺。' },
  { subject: '语文', no: 13, total: 20, type: '补充句子', topic: '补充句子', score: 5, grade: 'choice', stem: '我去（　　）。', options: [{ key: 'A', text: '上学' }, { key: 'B', text: '苹果' }, { key: 'C', text: '大' }], answer: 'A', explain: '「去」后面跟要做的事，我去上学。', praise: '句子被你补完整了。' },
  { subject: '语文', no: 14, total: 20, type: '课文填空', topic: '课文填空', score: 5, grade: 'choice', stem: '金木水火（　　）。', options: [{ key: 'A', text: '土' }, { key: 'B', text: '山' }, { key: 'C', text: '鸟' }], answer: 'A', explain: '课文里是「金木水火土」。', praise: '这句课文你记住了。' },
  { subject: '语文', no: 15, total: 20, type: '判断题', topic: '声母', score: 5, grade: 'choice', stem: '「b」和「d」是同一个字母。', options: [{ key: '对', text: '对' }, { key: '错', text: '错' }], answer: '错', explain: 'b 的肚子在右边，d 的肚子在左边，不是同一个。', praise: '你看得很仔细，没有把 b 和 d 看成一个。' },
  { subject: '语文', no: 16, total: 20, type: '选字填空', topic: '选字填空', score: 5, grade: 'choice', stem: '小鸟站得高高的，在山（　　）。', options: [{ key: 'A', text: '上' }, { key: 'B', text: '下' }], answer: 'A', explain: '站得高高的，是在山上。', praise: '上和下你没有混。' },
  { subject: '语文', no: 17, total: 20, type: '拼读', topic: '拼读', score: 5, grade: 'choice', stem: '读一读，选出句子：wǒ ài mā ma', options: [{ key: 'A', text: '我爱爸爸' }, { key: 'B', text: '我爱妈妈' }, { key: 'C', text: '我去妈妈' }], answer: 'B', explain: '整句是「我爱妈妈」，不是爸爸，也不是去。', praise: '一整句拼音你都读对了。' },
  { subject: '语文', no: 18, total: 20, type: '连词成句', topic: '连词成句', score: 5, grade: 'fill', stem: '把词排成一句话：小鸟　　在　　山上', accepts: ['小鸟在山上', '小鸟在山上。'], answer: '小鸟在山上。', explain: '先说小鸟，再说它在山上。', praise: '你把「谁在哪里」排清楚了。' },
  { subject: '语文', no: 19, total: 20, type: '标调', topic: '标调', score: 5, grade: 'choice', stem: '「马」的拼音是哪一个？', options: [{ key: 'A', text: 'mā' }, { key: 'B', text: 'mǎ' }, { key: 'C', text: 'mà' }], answer: 'B', explain: '马是第三声，写成 mǎ。', praise: '第三声你标对了。' },
  { subject: '语文', no: 20, total: 20, type: '看图写话', topic: '看图写话', score: 5, grade: 'write', picture: '图意：一个小女孩，把一个苹果给妈妈。', stem: '请写一句完整的话。', keys: ['苹果', '妈妈'], gives: ['给', '送'], answer: '小女孩把苹果给妈妈。', explain: '要写清谁把苹果给了妈妈。', praise: '你把图里的事写成一句话了。' },
  { subject: '数学', no: 1, total: 20, type: '比大小', topic: '比大小', score: 5, grade: 'choice', stem: '18 和 15 比，18 怎么样？', options: [{ key: 'A', text: '更大' }, { key: 'B', text: '更小' }], answer: 'A', explain: '18 在 15 后面，所以 18 更大。', praise: '你看出 18 比 15 大。' },
  { subject: '数学', no: 2, total: 20, type: '比大小', topic: '比大小', score: 5, grade: 'fill', stem: '在 ○ 里填 >、< 或 =。9 ○ 12', accepts: ['<', '＜'], answer: '<', explain: '9 比 12 小，所以填 <。', praise: '小于号你用对了。' },
  { subject: '数学', no: 3, total: 20, type: '数序', topic: '数序', score: 5, grade: 'fill', stem: '12 后面的一个数是多少？', accepts: ['13'], answer: '13', explain: '12 再数一个，就是 13。', praise: '数序你接着数对了。' },
  { subject: '数学', no: 4, total: 20, type: '单双数', topic: '单双数', score: 5, grade: 'choice', stem: '8 是单数还是双数？', options: [{ key: 'A', text: '单数' }, { key: 'B', text: '双数' }], answer: 'B', explain: '8 可以两个两个地分完，是双数。', praise: '双数你分出来了。' },
  { subject: '数学', no: 5, total: 20, type: '加法', topic: '加法', score: 5, grade: 'fill', stem: '7 + 6 =（　　）', accepts: ['13'], answer: '13', explain: '7 加 6 等于 13。', praise: '这道加法你算对了。' },
  { subject: '数学', no: 6, total: 20, type: '减法', topic: '减法', score: 5, grade: 'fill', stem: '15 - 8 =（　　）', accepts: ['7'], answer: '7', explain: '15 减 8 等于 7。', praise: '这道减法你算对了。' },
  { subject: '数学', no: 7, total: 20, type: '加法', topic: '加法', score: 5, grade: 'fill', stem: '9 + 8 =（　　）', accepts: ['17'], answer: '17', explain: '9 加 8 等于 17。', praise: '进位加法你也算对了。' },
  { subject: '数学', no: 8, total: 20, type: '减法', topic: '减法', score: 5, grade: 'fill', stem: '20 - 5 =（　　）', accepts: ['15'], answer: '15', explain: '20 减 5 等于 15。', praise: '从 20 里去掉 5，你算对了。' },
  { subject: '数学', no: 9, total: 20, type: '连加', topic: '连加', score: 5, grade: 'fill', stem: '4 + 3 + 2 =（　　）', accepts: ['9'], answer: '9', explain: '从左往右，4+3=7，7+2=9。', praise: '你这道连加按顺序算，很清楚。' },
  { subject: '数学', no: 10, total: 20, type: '连减', topic: '连减', score: 5, grade: 'fill', stem: '12 - 2 - 3 =（　　）', accepts: ['7'], answer: '7', explain: '12-2=10，10-3=7。', praise: '连减你一步一步减对了。' },
  { subject: '数学', no: 11, total: 20, type: '加减混合', topic: '加减混合', score: 5, grade: 'fill', stem: '9 + 6 - 4 =（　　）', accepts: ['11'], answer: '11', explain: '先 9+6=15，再 15-4=11。', praise: '加减混合你按顺序算，很清楚。' },
  { subject: '数学', no: 12, total: 20, type: '看图列式', topic: '看图列式', score: 5, grade: 'apply', picture: '图意：左边 5 个苹果，右边 3 个苹果。', stem: '一共有多少个？写出列式和答语。', equation: ['5+3=8', '3+5=8'], result: '8', replies: ['一共', '有'], answer: '5+3=8，一共有8个。', explain: '两边合在一起，用加法。', praise: '你把图里的苹果合起来算了。' },
  { subject: '数学', no: 13, total: 20, type: '比多比少', topic: '比多比少', score: 5, grade: 'apply', stem: '小明有 6 块糖，小红比小明多 2 块。小红有几块？写出列式和答语。', equation: ['6+2=8', '2+6=8'], result: '8', replies: ['有', '小红'], answer: '6+2=8，小红有8块。', explain: '比小明多，就要用加法。', praise: '看到「多」，你用加法，方向对了。' },
  { subject: '数学', no: 14, total: 20, type: '位置', topic: '位置', score: 5, grade: 'choice', stem: '书放在桌子上面。书在桌子的哪一面？', options: [{ key: 'A', text: '上面' }, { key: 'B', text: '下面' }, { key: 'C', text: '左边' }], answer: 'A', explain: '书在桌面上，就是上面。', praise: '上面和下面你分清了。' },
  { subject: '数学', no: 15, total: 20, type: '认识图形', topic: '图形', score: 5, grade: 'choice', stem: '皮球看起来是什么形状？', options: [{ key: 'A', text: '圆' }, { key: 'B', text: '正方形' }, { key: 'C', text: '三角形' }], answer: 'A', explain: '皮球圆圆的，是圆形。', praise: '圆形你认出来了。' },
  { subject: '数学', no: 16, total: 20, type: '认识整时', topic: '整时', score: 5, grade: 'fill', stem: '分针指着 12，时针指着 3。是几时？', accepts: ['3', '3时', '三时', '3点'], answer: '3时', explain: '分针在 12，看时针指着 3，就是 3 时。', praise: '整时你看对了。' },
  { subject: '数学', no: 17, total: 20, type: '认识半时', topic: '半时', score: 5, grade: 'fill', stem: '分针指着 6，时针在 2 和 3 的中间。是几时半？', accepts: ['2时半', '2点半', '二时半'], answer: '2时半', explain: '分针在 6 是半时。时针刚过 2，所以是 2 时半。', praise: '半时你看懂了。' },
  { subject: '数学', no: 18, total: 20, type: '比大小', topic: '比大小', score: 5, grade: 'fill', stem: '先算再比。9 - 3 ○ 4 + 3', accepts: ['<', '＜'], answer: '<', explain: '左边是 6，右边是 7，6 小于 7。', praise: '你先算出两边，再比大小，很清楚。' },
  { subject: '数学', no: 19, total: 20, type: '应用题', topic: '应用题', score: 5, grade: 'apply', stem: '妈妈有 10 个苹果。吃了 3 个，又给了小明 2 个。还剩几个？写出列式和答语。', equation: ['10-3-2=5', '10-5=5'], result: '5', replies: ['还剩', '剩'], answer: '10-3-2=5，还剩5个。', explain: '先去掉吃掉的 3 个，再去掉给出去的 2 个。', praise: '两步减法你按顺序写出来了。' },
  { subject: '数学', no: 20, total: 20, type: '应用题', topic: '排队', score: 5, grade: 'apply', stem: '小华前面有 4 人，后面有 3 人。这一队一共有几人？写出列式和答语。', equation: ['4+1+3=8', '4+3+1=8', '3+1+4=8'], result: '8', replies: ['一共', '有'], answer: '4+1+3=8，一共有8人。', explain: '别忘了加上小华自己，4+1+3=8。', praise: '你把小华自己也数进去了。' }
]

const tipOf = {
  声母: '每天看着 b、p、d、q，各读 5 遍。',
  韵母: 'a、o、e、i、u、ü 按顺序每天读一遍。',
  拼读: '拿 5 个拼音，先读声母再读韵母，拼给大人听。',
  标调: '把标调口诀再背一遍：有 a 标 a，没 a 找 o、e。',
  看拼音写词语: '每天看 3 个拼音，把词语写出来。',
  笔画: '把「人、十、口」各书空写 3 遍，边写边数。',
  笔顺: '写「十」和「人」时，大声说出先写哪一笔。',
  选字填空: '把「日」和「目」、「上」和「下」各说一句话。',
  量词: '一只鸟、一个苹果，每天再配 5 个量词。',
  词语搭配: '用「又大又圆」说一种水果。',
  反义词: '大对小、多对少，做成卡片天天翻一翻。',
  连词成句: '用「谁、在哪里」把 3 个词排成一句。',
  补充句子: '用「我去……」每天说 2 句完整的话。',
  课文填空: '把「金木水火土」读 3 遍，再背一遍。',
  看图写话: '看图先说谁在做什么，再写成一句话，末尾加句号。',
  比大小: '每天抽两个数，说出谁大谁小。',
  数序: '从 1 数到 20，再从 20 倒着数回 1。',
  单双数: '把 20 以内的数两个两个圈，圈得完就是双数。',
  加法: '每天做 5 道 20 以内的加法。',
  减法: '每天做 5 道 20 以内的减法。',
  连加: '连加从左往右，先把前两个加完。',
  连减: '连减也从左往右，减完一个再减下一个。',
  加减混合: '先看第一个符号，算完再看下一个符号。',
  看图列式: '看图先数清楚，再决定用加还是用减。',
  比多比少: '题里说「多」就用加，说「少」就用减。',
  位置: '把书放在桌上、桌下，说出「上面」和「下面」。',
  图形: '在家里找圆、正方形、三角形，各找 1 个。',
  整时: '分针指着 12，就读时针指着几。',
  半时: '分针指着 6 就是半时，再看时针刚走过几。',
  应用题: '先写列式，再写「答：还剩几个」。',
  排队: '数一队人时，记得加上自己。'
}

/** 去掉空格和标点，便于和标准答案比对。 */
function normalize(value) {
  return String(value)
    .trim()
    .replace(/\s/g, '')
    .replace(/[。！!，,、.]/g, '')
    .replace(/＝/g, '=')
    .replace(/－/g, '-')
    .replace(/＞/g, '>')
    .replace(/＜/g, '<')
}

/** 选择题、判断题是否选对。 */
function choiceHit(question, text) {
  const found = question.options.find((option) => option.key === text || option.text === text)
  if (found) {
    return found.key === question.answer
  }
  return text.toUpperCase() === question.answer
}

/** 填空、连词成句是否和任一合格答案相同。 */
function fillHit(question, text) {
  const given = normalize(text)
  const accepted = [question.answer].concat(question.accepts || [])
  return accepted.some((item) => normalize(item) === given)
}

/** 看图写话按要素、语句、句末给分。满分 5 分。 */
function gradeWrite(question, text) {
  const notes = []
  let score = 0
  const hasKeys = question.keys.every((key) => text.includes(key))
  const hasGive = question.gives.some((word) => text.includes(word))
  if (hasKeys && hasGive) {
    score += 3
  } else if (question.keys.some((key) => text.includes(key)) || hasGive) {
    score += 1
    notes.push('要把苹果和「给妈妈」写进去')
  } else {
    notes.push('要把苹果和「给妈妈」写进去')
  }
  if (normalize(text).length >= 7) {
    score += 1
  } else {
    notes.push('句子再写完整一点')
  }
  if (/[。！!]$/.test(text)) {
    score += 1
  } else {
    notes.push('写完加上句号')
  }
  return { score, note: notes.join('。') }
}

/** 应用题按列式、得数、答语给分。满分 5 分。 */
function gradeApply(question, text) {
  const notes = []
  let score = 0
  const given = normalize(text)
  const equationOk = question.equation.some((item) => given.includes(normalize(item)))
  if (equationOk) {
    score += 3
  } else {
    notes.push('列式要写出来')
  }
  if (given.includes(question.result)) {
    score += 1
  } else {
    notes.push('得数再算一次')
  }
  if (question.replies.some((word) => text.includes(word))) {
    score += 1
  } else {
    notes.push('补上一句答语')
  }
  return { score, note: notes.join('。') }
}

/** 判一道题。空答案抛出错误，不记分。 */
export function gradeQuizAnswer(question, raw) {
  const text = String(raw == null ? '' : raw).trim()
  if (!text) {
    throw new Error('先写一个答案')
  }
  let score = 0
  let note = ''
  if (question.grade === 'choice') {
    score = choiceHit(question, text) ? question.score : 0
  } else if (question.grade === 'fill') {
    score = fillHit(question, text) ? question.score : 0
  } else if (question.grade === 'write') {
    const graded = gradeWrite(question, text)
    score = graded.score
    note = graded.note
  } else if (question.grade === 'apply') {
    const graded = gradeApply(question, text)
    score = graded.score
    note = graded.note
  } else {
    throw new Error('这道题还不能批改')
  }
  const correct = score === question.score
  const comment = correct ? question.praise : '没关系，我们看看哪里要注意。'
  return {
    score,
    correct,
    comment,
    answer: question.answer,
    explain: question.explain,
    note
  }
}

/** 错题里不重复的知识点，最多 3 条。 */
function weakTopics(wrongs) {
  const names = []
  wrongs.forEach((item) => {
    if (!names.includes(item.topic)) {
      names.push(item.topic)
    }
  })
  return names.slice(0, 3)
}

/** 40 题全部完成后的成绩报告。 */
export function buildQuizReport(records) {
  const chinese = records.filter((item) => item.subject === '语文')
  const math = records.filter((item) => item.subject === '数学')
  const chineseScore = chinese.reduce((sum, item) => sum + item.score, 0)
  const mathScore = math.reduce((sum, item) => sum + item.score, 0)
  const totalScore = chineseScore + mathScore
  const chineseWrongs = chinese.filter((item) => item.score < item.full)
  const mathWrongs = math.filter((item) => item.score < item.full)
  const chineseWeak = weakTopics(chineseWrongs)
  const mathWeak = weakTopics(mathWrongs)
  const suggestions = chineseWeak.concat(mathWeak).map((topic) => tipOf[topic]).filter((tip) => tip)
  return {
    chineseScore,
    mathScore,
    totalScore,
    chineseWrongs,
    mathWrongs,
    chineseWeak,
    mathWeak,
    summary: summaryOf(totalScore, chineseScore, mathScore),
    suggestions: suggestions.length ? suggestions.slice(0, 3) : ['每天读 5 个拼音，再写 5 道 20 以内加减法。', '做完一题，用自己的话把答案再说一遍。']
  }
}

/** 总评。先说做到的地方，再说下一步练什么。 */
function summaryOf(totalScore, chineseScore, mathScore) {
  if (totalScore >= 180) {
    return `40 道题你都做完了，一共 ${totalScore} 分。语文 ${chineseScore} 分，数学 ${mathScore} 分，大部分题目一次就做对了。继续保持读题慢一点、写完再检查的习惯。偶尔错的那几题，明天再练两遍就更稳。你今天很专心。`
  }
  if (totalScore >= 120) {
    return `40 道题你都坚持做完了，一共 ${totalScore} 分。语文 ${chineseScore} 分，数学 ${mathScore} 分，会做的题目很清楚。错题不多，多半是看快了，或者少写了列式和答语。没关系，把错题再做一遍，分数就会往上走。你肯思考，这很棒。`
  }
  return `40 道题你都做完了，这就很不容易，一共 ${totalScore} 分。语文 ${chineseScore} 分，数学 ${mathScore} 分。做对的题说明这些知识点已经记住了。还没做对的，我们一次只练一个小点，不要着急。明天少做几题，做慢一点，你一定能更熟练。`
}
