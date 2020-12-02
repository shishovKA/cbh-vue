import store from '../index'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module({ namespaced: true, name: 'lm' })
class LossModule extends VuexModule {

    public attacks = [

        {
            title: 'Ransomware',
            selected: true,
        },

        {
            title: 'Phishing attack',
            selected: false,
        },

    ];


    public periods = [

        {
            title: 'Less than 2 days',
            selected: true,
        },

        {
            title: 'More than 2 days',
            selected: false,
        },

    ];

    get attackType() {
        return this.attacks.find((el) => el.selected == true)?.title;
    }

    get periodType() {
        return this.periods.find((el) => el.selected == true)?.title;
    }

    @Mutation
    selectAttack(index: number) {
        this.attacks.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.attacks[index];
        selectedItem.selected = true;
    };

    @Mutation
    selectPeriod(index: number) {
        this.periods.forEach((element) => {
            element.selected = false;
        });

        const selectedItem = this.periods[index];
        selectedItem.selected = true;
    };

    /*
    get selectedTab() {
        return this.data.find(item => item.selected == true);
    }
    */

    get table() {
        const portfolioID = store.state.Root.curPorfolioId;
        let first: string;
        let second: string;
        first = (this.attackType == 'Ransomware') ? ((this.periodType == 'Less than 2 days') ? 'ransomware_less_low' : 'ransomware_more_low') : 'p' 
        second = (this.attackType == 'Ransomware') ? ((this.periodType == 'Less than 2 days') ? 'ransomware_less_low.1' : 'ransomware_more_low.1') : 'p' 
        const headers = ['companyName','PORTFOLIO WEIGHT', `${first}`, `${second}`] 
        //ransomware_less_low,ransomware_less_low.1,ransomware_more_low,ransomware_more_low.1
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
export default LossModule