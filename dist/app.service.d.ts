import { Card } from './card.model';
import { Dashboard } from './dashboard.model';
export declare class AppService {
    private cardModel;
    private dashboardModel;
    constructor(cardModel: Card, dashboardModel: Dashboard);
    findAllDashboard(): Promise<Dashboard[]>;
    findDashboardByName(name: string): Promise<Dashboard>;
    findDashboardById(id: string): Promise<Dashboard>;
    createDashboard(name: string): Promise<Dashboard>;
    updateDashboard(id: string, name: string): Promise<Dashboard>;
    deleteDashboard(id: string): Promise<Dashboard>;
    findAllCards(): Promise<Card[]>;
    findCardsByBoardId(boardId: string): Promise<Card[]>;
    createCard(title: string, description: string, dashboardId: string): Promise<Card>;
    updateCard(id: string, params: any): Promise<Card>;
    deleteCard(id: string): Promise<Card>;
    changeBoardFromCard(id: string, dashboardId: string): Promise<any>;
}
