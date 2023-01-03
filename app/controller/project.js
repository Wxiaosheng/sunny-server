const { Controller } = require('egg');
const MongoDB = require('@sunny-cli/mongdb');

const DB_URL = 'mongodb://www.sunny.com:27017';
const DB_NAME = 'sunny-cli';

class HomeController extends Controller {
  async getProjectTemplate() {
    const { ctx } = this;
    const mongo = new MongoDB(DB_URL, DB_NAME);
    let list = await mongo.query('project');
    list = list.map(item => ({ name: item.name, value: item.npmName }));
    ctx.body = list;
  }
}

module.exports = HomeController;
