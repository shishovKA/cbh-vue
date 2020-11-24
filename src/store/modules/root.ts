import store from '../index'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module
class Root extends VuexModule {

  public baseJsonObj: any;
  private csvDB: any;

  public curPageInd: number = 0;
  public pages: string[] = ['WelcomePage', 'RiskPage', 'BenchmarkPage', 'LossPage', 'ResearchPage', 'ScenarioPage'];
  public curPorfolioId: string = '';


  @Mutation
  loadJSON(newJsonObj: object) {
    this.baseJsonObj = newJsonObj;
    store.commit('loadSidebarData', this.baseJsonObj.portfolios)
  }

  @Mutation
  loadCSV(newCSV: any) {
    this.csvDB = newCSV;
  }


  @Mutation
  switchPage(newPage: string) {
    const ind = this.pages.indexOf(newPage);
    if (ind !== -1) {
      this.curPageInd = ind;
    };
  }

  @Mutation
  changeCurrentPortfolioId(id: string) {
    this.curPorfolioId = id;
  }

  get currentPage() {
    return this.pages[this.curPageInd];
  }

  get curPortfolioJSON() {
    const portfolioId = store.state.Root.curPorfolioId;
    const portfolio = store.state.Root.baseJsonObj.portfolios.find(portfolio => portfolio.id === portfolioId);
    return portfolio
  }

}
export default Root




/*




*/