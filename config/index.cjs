/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9fc7da5e1f450220',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b1f8122d19c5dcfca56a854935df47b9',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyTvA6WpdyvyoYQsZ6wS5UoNNoVM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fgH6xS5Y87jaxxSJL77srU5p1R9ix3fbRIzFMhCxRl0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '梦倩宝宝', year: '2023', date: '01-26',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '梦倩宝宝', year: '2001', date: '08-09',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2024', date: '02-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'love_day', date: '2023-12-26' },
        // 在一起纪念日
        { keyword: 'marry_day', date: '2024-02-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fgH6xS5Y87jaxxSJL77srU5p1R9ix3fbRIzFMhCxRl0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyTvA6av5rfbRNdc09yUR5P7ZyiY',
    }
  ],

}

module.exports = USER_CONFIG

