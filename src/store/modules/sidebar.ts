import store from '../index'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

interface sidebarItem {
    name: string;
    id: string,
    score: number,
    selected: boolean,
}

@Module
class SideBar extends VuexModule {

    public data: sidebarItem[] = [];

    @Mutation
    switchPortfolio(id: string) {
        this.data.forEach((element) => {
            element.selected = false;
        });
        const selectedPortfolio = this.data.find(portfolio => portfolio.id === id);
        if (selectedPortfolio) {
            selectedPortfolio.selected = true;
            store.commit('changeCurrentPortfolioId', selectedPortfolio.id);
        }
    };

    @Mutation
    loadSidebarData(portfolios: any) {
        this.data.splice(0, this.data.length);
        portfolios.forEach((portfolio: any) => {
            const el = {
                name: portfolio.name,
                id: portfolio.id,
                score: portfolio.risk,
                selected: false,
            };
            this.data.push(el);
        });
    };

}
export default SideBar