import store from '../index'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module
class Header extends VuexModule {

    public data = [
        { pageName: 'RiskPage', title: 'Portfolio Risk', selected: true, isPro: false },
        { pageName: 'BenchmarkPage', title: 'Peer Benchmarking', selected: false, isPro: false },
        { pageName: 'LossPage', title: 'Loss Model', selected: false, isPro: false },
        { pageName: 'ResearchPage', title: 'Research', selected: false, isPro: false },
        { pageName: 'ScenarioPage', title: 'Scenario Planner', selected: false, isPro: true },
      ];

    @Mutation
    selectHeaderItem(index: number) {
        this.data.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.data[index];
        selectedItem.selected = true;
        store.commit('switchPage', selectedItem.pageName);
    };

}
export default Header