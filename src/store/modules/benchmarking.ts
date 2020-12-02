import store from '../index'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module({ namespaced: true, name: 'pbm' })
class BenchmarkingModule extends VuexModule {

    public data = [
        {
            title: 'Equity Risk',
            selected: true,
            isPro: false,
            hasTable: true,
            tableName: 'EquityTable',
        },

        {
            title: 'Credit Default Risk',
            selected: false,
            isPro: false,
            hasTable: true,
            tableName: 'CreditTable',
        },

        {
            title: 'Financial Performance Risk',
            selected: false,
            isPro: false,
            hasTable: true,
            tableName: 'PerformanceTable',
        },

        {
            title: 'CyFi™ Mapping',
            selected: false,
            isPro: true,
            hasTable: false,
            hasSqrChart: true,
        },

    ];

    @Mutation
    selectHeaderItem(index: number) {
        this.data.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.data[index];
        selectedItem.selected = true;
    };

    get selectedTab() {
        return this.data.find(item => item.selected == true);
    }

    get tableEquity() {
        const portfolioID = store.state.Root.curPorfolioId;
        const headers = ['companyName','discount-to-fair-value (%)', 'fair-value (mn)'] 
        //@ts-ignore
        const table = store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
        //@ts-ignore
        const resultArr = table.map((company) => {
            const item: any = [];
            headers.forEach((header) => {
                if (header in company) { item.push(company[header]) } else { item.push('❔') }
            });
            return item;
        });
        return resultArr;
    }

    get tablePerformance() {
        const portfolioID = store.state.Root.curPorfolioId;
        const headers = ['companyName', 'Operating Income', 'Revenue', 'Free Cash Flow', 'Net Income', 'Quick Ratio', 'Working Capital Ratio', 'Book Value'] 
        //@ts-ignore
        const table = store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
        //@ts-ignore
        const resultArr = table.map((company) => {
            const item: any = [];
            headers.forEach((header) => {
                if (header in company) { item.push(company[header]) } else { item.push('❔') }
            });
            return item;
        });
        return resultArr;
    }

    get tableCredit() {
        const portfolioID = store.state.Root.curPorfolioId;
        const headers = ['companyName', 'Probability of Downgrade'] 
        //@ts-ignore
        const table = store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
        //@ts-ignore
        const resultArr = table.map((company) => {
            const item: any = [];
            headers.forEach((header) => {
                if (header in company) { item.push(company[header]) } else { item.push('❔') }
            });
            return item;
        });
        return resultArr;
    }



}
export default BenchmarkingModule