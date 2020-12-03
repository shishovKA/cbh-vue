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


    public cyberFactors = [
        {
            title: 'Complexitty',
            selected: true,
            dbKey: 'complexity',
        },

        {
            title: 'Awareness',
            selected: false,
            dbKey: 'awareness',
        },

        {
            title: 'Vulnerability',
            selected: false,
            dbKey: 'vulnerability',
        },

    ];

    public financialFactors = [
        {
            title: 'Capital Efficiency ',
            selected: true,
            dbKey: 'capitalEfficiency',
        },

        {
            title: 'Capital Management',
            selected: false,
            dbKey: 'capitamManagement',
        },

        {
            title: 'Complience',
            selected: false,
            dbKey: '',
        },

        {
            title: 'Financial Exposure',
            selected: false,
            dbKey: 'financialExposure',
        },

        {
            title: 'Productivity',
            selected: false,
            dbKey: 'productivity',
        },

        {
            title: 'Sentiment',
            selected: false,
            dbKey: 'sentiment',
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

    @Mutation
    selectCyberFactor(index: number) {
        this.cyberFactors.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.cyberFactors[index];
        selectedItem.selected = true;
    };

    @Mutation
    selectFinancialFactor(index: number) {
        this.financialFactors.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.financialFactors[index];
        selectedItem.selected = true;
    };

    get selectedCyberFactor() {
        return this.cyberFactors.find(item => item.selected == true);
    }

    get selectedFinancialFactor() {
        return this.financialFactors.find(item => item.selected == true);
    }

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