const { Controller } = require('egg');

class HomeController extends Controller {
  async getProjectTemplate() {
    const { ctx } = this;
    ctx.body = [{
      projectName: 'react',
      projectVersion: '1.0.0',
    }, {
      projectName: 'vue',
      projectVersion: '1.0.0',
    }];
  }
}

module.exports = HomeController;
