import {MenuManagement} from '../menu/MenuManagement';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './menuManagement.css';


export function Management() {
    return (
        <div className="menuManagement">  
            <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            <strong>Hello, here you can manage your store</strong>
            </Alert>
            <MenuManagement></MenuManagement>
        </div>
    )
}
