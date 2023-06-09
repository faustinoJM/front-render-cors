import React, { useEffect, useState } from 'react'

import { Routes, Route, Navigate, useLocation} from 'react-router-dom';
import EditDepartment from '../pages/edit/EditDepartment';
import EditEmployee from '../pages/edit/EditEmployee';
import EditPosition from '../pages/edit/EditPosition';
import EditProfile from '../pages/edit/EditProfile';
import Home from '../pages/home/Home';
import ListDepartment from '../pages/list/ListDepartment';
import ListEmployee from '../pages/list/ListEmployee';
import ListInputPayroll from '../pages/list/ListInputPayroll';
import ListOutputPayroll from '../pages/list/ListOutputPayroll';
import ListPosition from '../pages/list/ListPosition';
import Login from '../pages/login/Login';
import NewDepartment from '../pages/new/NewDepartment';
import NewEmployee from '../pages/new/NewEmployee';
import NewPayroll from '../pages/new/NewPayroll';
import NewPosition from '../pages/new/NewPosition';
import NewProfile from '../pages/new/NewProfile';
import Profile from '../pages/profile/Profile';
import Setting from '../pages/settings/Setting';
import SettingLogo from '../pages/settings/SettingLogo';
import SettingPayroll from '../pages/settings/SettingPayroll';
import Single from '../pages/single/Single';
import SingleEmployee from '../pages/single/SingleEmployee';
import RouteAuth from './RouteAuth';
import ListPayrolls from '../pages/list/ListPayrolls';

export default function Routers() {

  return(
    <Routes>
    <Route path="/" >
      <Route index element={<RouteAuth isPrivate={true}><Home/></RouteAuth>} />
      <Route path="login" element={<Login/>} />
      <Route path="employees">
        <Route index element={<RouteAuth isPrivate={true}><ListEmployee listName={"Funcionarios"} listPath={'employees'} /></RouteAuth>} />
        <Route path=":employeeId" element={<RouteAuth isPrivate={true}><SingleEmployee/></RouteAuth>} />
        <Route path="update/:employeeId" element={<RouteAuth isPrivate={true}><EditEmployee title="Editar Funcionario"/></RouteAuth>} />
        <Route path="new" element={<RouteAuth isPrivate={true}><NewEmployee title="Adicionar novo Funcionario" /> </RouteAuth>} />
      </Route>
      <Route path="positions">
        <Route index element={ <RouteAuth isPrivate={true}><ListPosition listName={"Cargo"} listPath={"positions"}/></RouteAuth>} />
        <Route path="update/:positionId" element={<RouteAuth isPrivate={true}><EditPosition title="Editar Cargo"/></RouteAuth>} />
        <Route path="new" element={<RouteAuth isPrivate={true}><NewPosition title="Adicionar novo Cargo" /></RouteAuth>} />
      </Route>
      <Route path="departments">
        <Route index element={<RouteAuth isPrivate={true}><ListDepartment listName={"Departamentos"} listPath={"departments"}/></RouteAuth>} />
        <Route path="update/:departmentId" element={<RouteAuth isPrivate={true}><EditDepartment title="Editar Departamento"/></RouteAuth>} />
        <Route path="new" element={<RouteAuth isPrivate={true}><NewDepartment title="Adicionar novo Departamento"/></RouteAuth>} />
      </Route>
      <Route path="payrolls">
        <Route path="output" element={<RouteAuth isPrivate={true}><ListOutputPayroll listName={"Folha Salario"} listPath={"payrolls"}/> </RouteAuth>} />
        <Route path="input" element={<RouteAuth isPrivate={true}><ListInputPayroll listName={"Processamento Salario"} listPath={"payrolls"}/></RouteAuth>} />
        <Route path="list" element={<RouteAuth isPrivate={true}><ListPayrolls title="Lista de Folhas Pagamento" listPath={"payrolls"}/></RouteAuth>} />
        <Route path="output/:payrollId" element={<RouteAuth isPrivate={true}><ListOutputPayroll listName={"Folha Salario"} listPath={"payrolls"}/></RouteAuth>} />
        <Route path="new" element={<RouteAuth isPrivate={true}><NewPayroll title="Adicionar novo Pagamento" /></RouteAuth>} />
      </Route>
      <Route path="profile">
        <Route index element={<RouteAuth isPrivate={true}><Profile listName={"Perfil"} listPath={"profile"}/></RouteAuth>} />
        <Route path=":profileId" element={<RouteAuth isPrivate={true}><EditProfile/></RouteAuth>} />
        <Route path="new" element={<RouteAuth isPrivate={true}><NewProfile title="Adicionar novo Perfil" /></RouteAuth>} />
      </Route>
      <Route path="settings" >
        <Route index element={<RouteAuth isPrivate={true}><Setting/></RouteAuth>} />
        {/* <Route path="company" element={<RouteAuth isPrivate={true}><SettingCompany/></RouteAuth>} /> */}
        <Route path="logo" element={<RouteAuth isPrivate={true}><SettingLogo/></RouteAuth>} />
        <Route path="payroll" element={<RouteAuth isPrivate={true}><SettingPayroll/></RouteAuth>} />
      </Route>
    </Route>          
    </Routes>
  )
}


