/**
 * 一年级上册期中试卷。接口尚未提供，题目写死。
 * 第 1 页语文，第 2 页数学。100 以内只到整十数加减，不进位、不退位。
 * TODO: 接口地址未提供。接入后用接口替换本文件，页面仍渲染同样的 pages / sections / items 字段。
 */

export const midtermPaper = {
  title: '一年级上册期中试卷',
  pages: [
    {
      pageNo: '第 1 页',
      pageFoot: '第 1 页 / 共 2 页',
      subject: '语文',
      sections: [
        {
          title: '一、读拼音，选出正确的句子',
          items: [
            {
              stem: '1. bà ba lái le',
              options: [
                { key: 'A', text: '爸爸来了' },
                { key: 'B', text: '妈妈来了' },
                { key: 'C', text: '爸爸去了' }
              ],
              answer: 'A'
            },
            {
              stem: '2. wǒ ài mā ma',
              options: [
                { key: 'A', text: '我爱爸爸' },
                { key: 'B', text: '我爱妈妈' },
                { key: 'C', text: '我去妈妈' }
              ],
              answer: 'B'
            },
            {
              stem: '3. xiǎo niǎo zài shān shàng',
              options: [
                { key: 'A', text: '小鸟在山上' },
                { key: 'B', text: '小鸟在水上' },
                { key: 'C', text: '小鸟在山下' }
              ],
              answer: 'A'
            }
          ]
        },
        {
          title: '二、选字填空',
          items: [
            {
              stem: '1. 月亮在天（　　）。',
              hint: '上　　下',
              answer: '上'
            },
            {
              stem: '2. 天上有（　　）。',
              hint: '日　　目',
              answer: '日'
            },
            {
              stem: '3. 爸爸比我（　　）。',
              hint: '大　　小',
              answer: '大'
            }
          ]
        },
        {
          title: '三、连词成句',
          items: [
            {
              stem: '1. 我　　爱　　妈妈',
              answer: '我爱妈妈。'
            },
            {
              stem: '2. 小鸟　　在　　山上',
              answer: '小鸟在山上。'
            }
          ]
        },
        {
          title: '四、看图写一句话',
          items: [
            {
              stem: '图上：一个小女孩，把一个苹果给妈妈。请写一句完整的话。',
              lines: 3,
              answer: '小女孩把苹果给妈妈。',
              rubric: '内容：写到小女孩把苹果给妈妈。语句：是一句完整的话，能读通。书写：字写在格子里，能看清。'
            }
          ]
        }
      ]
    },
    {
      pageNo: '第 2 页',
      pageFoot: '第 2 页 / 共 2 页',
      subject: '数学',
      sections: [
        {
          title: '一、直接写出得数',
          items: [
            { stem: '1. 3 + 2 =（　　）', answer: '5' },
            { stem: '2. 8 - 3 =（　　）', answer: '5' },
            { stem: '3. 6 + 4 =（　　）', answer: '10' },
            { stem: '4. 9 - 5 =（　　）', answer: '4' },
            { stem: '5. 7 + 1 =（　　）', answer: '8' },
            { stem: '6. 10 - 4 =（　　）', answer: '6' }
          ]
        },
        {
          title: '二、分解',
          items: [
            { stem: '1. 5 可以分成 2 和（　　）。', answer: '3' },
            { stem: '2. 两个不一样的数相加得 10，而且都比 3 大。（　　）和（　　）', answer: '4 和 6' }
          ]
        },
        {
          title: '三、比一比，在 ○ 里填 >、< 或 =',
          items: [
            { stem: '1. 8 ○ 10 - 1', answer: '<' },
            { stem: '2. 6 + 2 ○ 8', answer: '=' },
            { stem: '3. 9 - 3 ○ 4 + 3', answer: '<' }
          ]
        },
        {
          title: '四、数的认识和整十数',
          items: [
            { stem: '1. 把 40、14、4 从大到小排。（　　）>（　　）>（　　）', answer: '40 > 14 > 4' },
            { stem: '2. 30 + 20 =（　　）', answer: '50' },
            { stem: '3. 50 - 10 =（　　）', answer: '40' }
          ]
        },
        {
          title: '五、读一读，算一算',
          items: [
            { stem: '1. 树上有 6 只鸟，飞走 2 只。还剩几只？', answer: '6 - 2 = 4，还剩 4 只。' },
            { stem: '2. 妈妈有 10 个苹果。吃了 3 个，又给了小明 2 个。还剩几个？', answer: '10 - 3 - 2 = 5，还剩 5 个。' }
          ]
        }
      ]
    }
  ]
}
