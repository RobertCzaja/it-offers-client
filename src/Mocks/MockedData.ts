import {OfferListModel} from "../Components/OfferList/OfferListModel";

export class MockedData {
    static offers (): OfferListModel[]  {
        return [
            {
                id: '7c353b81-74d8-4dcc-8506-4bafadc70a5a',
                technology: 'php',
                title: 'PHP Developer',
                salaryFrom: 15000,
                salaryTo: 24000,
                salaryCurrency: 'PLN',
                requiredSkills: ['PHP', 'MySql', 'PhpUnit'],
                publishedAt: new Date("2024-10-12"),
                seniority: 'senior',
                companyName: 'Comarch',
                companyCity: 'Kraków',
            },
            {
                id: '56ad7f24-0871-49fd-996b-605d0011a354',
                technology: 'php',
                title: 'PHP Mid Developer/React',
                salaryFrom: 23000,
                salaryTo: 25500,
                salaryCurrency: 'PLN',
                requiredSkills: ['PHP', 'React', 'TypeScript', 'MongoDB'],
                publishedAt: new Date('2024-09-21'),
                seniority: 'mid',
                companyName: 'AGTest',
                companyCity: 'Warszawa',
            },
            {
                id: '39cc1e35-5b80-45cc-aac3-ccf1bec98575',
                technology: 'java',
                title: 'Senior Java Engineer',
                salaryFrom: 26000,
                salaryTo: 31000,
                salaryCurrency: 'PLN',
                requiredSkills: [],
                publishedAt: new Date('2024-11-01'),
                seniority: 'senior',
                companyName: 'Scalability SA',
                companyCity: 'Gdańsk',
            },
        ];
    }
}