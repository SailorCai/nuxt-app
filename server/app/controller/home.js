/*
 * @Author: SailorCai
 * @Date: 2020-05-07 08:38:59
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-05-08 08:31:53
 * @FilePath: /project-full/server/app/controller/home.js
 */
'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController
