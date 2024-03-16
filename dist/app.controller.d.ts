import { AppService } from './app.service';
import { Dashboard } from './dashboard.model';
import { UpdateDashboardDto } from './dto/update.board.dto';
import { Card } from './card.model';
import { UpdateCardDto } from './dto/update.card.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllDashboards(): Promise<Dashboard[]>;
    findDashboardByName(name: string): Promise<Dashboard>;
    findDashboardById(id: string): Promise<Dashboard>;
    createDashboard(name: string): Promise<Dashboard>;
    updateDashboard(board: UpdateDashboardDto): Promise<Dashboard>;
    deleteDashboard(id: string): Promise<Dashboard>;
    findAllCards(): Promise<Card[]>;
    findCardByBoardId(boardId: string): Promise<Card[]>;
    createCard(title: string, boardId: string): Promise<Card>;
    updateCard(id: string, params: UpdateCardDto): Promise<Card>;
    deleteCard(id: string): Promise<Card>;
    changeBoardFromCard(id: string, boardId: string): Promise<Card>;
}
