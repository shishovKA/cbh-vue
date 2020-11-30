import store from '../index'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module({ namespaced: true, name: 'rpm' })
class RiskPageModule extends VuexModule {

public headers = ['PORTFOLIO COMPANIES','PORTFOLIO WEIGHT','CYBER GOVERNANCE SCORE','DISCOUNT TO FAIR VALUE', 'FAIR VALUE'];

get value() {
    const portfolio = store.getters.curPortfolioJSON;
    if (portfolio) return portfolio['value_mn']
    return undefined
}

get riskScore() {
    const portfolio = store.getters.curPortfolioJSON;
    if (portfolio) return portfolio['risk']
    return undefined
}

get discount() {
    const portfolio = store.getters.curPortfolioJSON;
    if (portfolio) return portfolio['discount']
    return undefined
}

get fairValue() {
    const portfolio = store.getters.curPortfolioJSON;
    if (portfolio) return portfolio['fair-value_mn']
    return undefined
}

get tableArr() {
    const portfolioID = store.state.Root.curPorfolioId;
    const headers = ['companyName','weight','cyberGovScore','discount-to-fair-value (%)', 'fair-value (mn)'] 
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

/*
{"company-id":"unique-id-c1","portfolio-id":"unique-id-p1","company-name":"HELLA GMBH & CO KGAA ","company-name-short":"Hella","portfolio-weight (%)":0.142,"cyber-governance-score":5,"discount-to-fair-value (%)":-0.023,"fair-value (mn)":-4,"probability-of-downgrade":3.6,"Operating Income":1,"Revenue":1,"Free Cash Flow":1,"Net Income":0,"Quick Ratio":1,"Working Capital Ratio":0,"Book Value":0,"Complexity":0.33,"Awareness":34366,"Vulnerability":44013,"Capital Efficiency ":12086,"Capital Management":44015,"Complience":43101,"Financial Exposure":28887,"Productivity":14977,"Sentiment":24139,"Ransomware_less loss_average ( %)":-0.023,"Ransomware_less loss_usd_equiv (mn)":-37.2,"Ransomware_more loss_average ( %)":-0.023,"Ransomware_more loss_usd_equiv (mn)":-37.2,"Phishing-attack_less loss_average ( %)":-0.023,"Phishing-attack_less loss_usd_equiv (mn)":-37.2,"Phishing-attack_more loss_average ( %)":-0.023,"Phishing-attack_more loss_usd_equiv (mn)":-37.2,"Alert id's":"['alert-id-1'. 'alert-id-12'. 'alert-id-4'. 'alert-id-45'. ]"}

*/


}
export default RiskPageModule