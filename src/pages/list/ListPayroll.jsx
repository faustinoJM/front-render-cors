import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import DatatablePayroll from "../../components/datatable/DatatablePayroll"

const payrollColumns = [
    { field: 'employee_id', headerName: 'ID', width: 70, pinnable: true, headerAlign: 'center',},
    { field: 'employee_name', headerName: 'Nome', width: 200, headerAlign: 'center',},
    { field: "departament_name", headerName:"Departemento", width: 150,  align:'center', headerAlign: 'center', },
    { field: "position_name", headerName:"Cargo", width: 150,  align:'center', headerAlign: 'center', },
    { field: "salary_base", headerName: "Salario Base", width: 130, align:'center', headerAlign: 'center',},
    { field: "subsidy",  headerName: "Subsidio", width: 130,  align:'center', headerAlign: 'center',},
    { field: "bonus",  headerName: "Bonus", width: 130,  align:'center', headerAlign: 'center',},
    { field: "total_overtime", headerName: "Total Horas Extras", width: 135,  align:'center', headerAlign: 'center',},
    { field: "total_absences", headerName: "Total Desconto Faltas", width: 100, align:'center', headerAlign: 'center',},
    { field: "cash_advances",  headerName: "Adiantamentos", width: 130,  align:'center', headerAlign: 'center',},
    { field: "backpay",  headerName: "Retroativos", width: 130,  align:'center', headerAlign: 'center',},
    { field: "total_income",  headerName: "Salario Bruto", width: 130,  align:'center', headerAlign: 'center',},
    { field: "irps",  headerName: "IRPS", width: 130,  align:'center', headerAlign: 'center',},
    { field: "inss_employee",  headerName: "INSS (3%)", width: 130, align:'center', headerAlign: 'center',},
    { field: "salary_liquid",headerName: "Salario Liquido", width: 150, align:'center', headerAlign: 'center',},
    { field: "inss_company",  headerName: "INSS (4%)", width: 130,  align:'center', headerAlign: 'center',},
    { field: "total_inss",  headerName: "Total INSS", width: 130,  align:'center', headerAlign: 'center',},
    // { field: "month",headerName: "MES", width: 50},
    // { field: "year",headerName: "ANO", width: 70}
]

export const outputColumnVisible= {
    total_overtime: true,
    total_absences: true,
    cash_advances: true,
    bonus: true,
    subsidy: true,
    backpay: true
  };
  
const ListPayroll = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("settings")
            if (response.data) {
                // response.data.absences === "true" ? visible.absences = true : visible.absences = false
                // response.data.overtime === "true" ? visible.bonus = true : visible.overtime50 = false
                // response.data.overtime === "true" ? visible.overtime100 = true : visible.overtime100 = false
    
                // payrollColumns.map(data => {
                //     // if (data.field === "employee_name")
                //     // data.hide = true
                //     // if (data.field === "departament_name")
                //     // data.hide = true
                //     // if (data.field === "position_name")
                //     // data.hide = true
                //     if (data.field === "total_absences")
                //     response.data.absences === "true" ? data.hide = false : data.hide = true
                //     if (data.field === "total_overtime")
                //     response.data.overtime === "true" ? data.hide = false : data.hide = true
                //     if (data.field === "backpay")
                //     response.data.backpay === "true" ? data.hide = false : data.hide = true
                //     if (data.field === "cash_advances")
                //     response.data.cash_advances === "true" ? data.hide = false : data.hide = true
                //     if (data.field === "bonus")
                //     response.data.bonus === "true" ? data.hide = false : data.hide = true
                //     if (data.field === "subsidy")
                //     response.data.subsidy === "true" ? data.hide = false : data.hide = true
                //     // if (data.field === "overtime100")
                //     // response.data.overtime === "true" ? data.hide = false : data.hide = true
                //     })
                response.data.absences === "true" ? outputColumnVisible.total_absences = true : outputColumnVisible.total_absences = false
                response.data.overtime === "true" ? outputColumnVisible.total_overtime = true : outputColumnVisible.total_overtime = false
                response.data.backpay === "true" ? outputColumnVisible.backpay = true : outputColumnVisible.backpay = false
                response.data.cash_advances === "true" ? outputColumnVisible.cash_advances = true : outputColumnVisible.cash_advances = false
                response.data.bonus === "true" ? outputColumnVisible.bonus = true : outputColumnVisible.bonus = false
                response.data.subsidy === "true" ? outputColumnVisible.subsidy = true : outputColumnVisible.subsidy = false
                    console.log("Input", payrollColumns)
                setSettings(response.data)
                
            }
        }

            fetchData()
        }, [])
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`${listPath}`, {month: 2, year: 2024})
             console.log(listPath)
             console.log(response.data)
             console.log(response.data.data)
             response.data.map((data) => {
                data.salary_base = formatSalary().format(data.salary_base)
                data.salary_liquid = formatSalary().format(data.salary_liquid)
                data.total_income = formatSalary().format(data.total_income)
                data.irps = formatSalary().format(data.irps)
                data.inss_employee = formatSalary().format(data.inss_employee)
                data.inss_company = formatSalary().format(data.inss_company)
                data.total_overtime = formatSalary().format(data.total_overtime)
                data.subsidy = formatSalary().format(data.subsidy)
                data.bonus = formatSalary().format(data.bonus)
                data.backpay = formatSalary().format(data.backpay)
                data.total_absences = formatSalary().format(data.total_absences)
                data.cash_advances = formatSalary().format(data.cash_advances)
                data.base_day = formatSalary().format(data.base_day)
                data.base_hour = formatSalary().format(data.base_hour)
                data.total_inss = formatSalary().format(data.total_inss)
            })
            setUserRows(response.data)
            console.log("1")
        }
        fetchData()
      
    }, [listPath])

    return (
        <div className="list">
            {console.log(userRows)}
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DatatablePayroll listName={listName} listPath={listPath} columns={payrollColumns} userRows={userRows} setUserRows={setUserRows} settings={settings} outputColumnVisible={outputColumnVisible}/>
            </div>
        </div>
    )
}

function formatSalary() {
    return new Intl.NumberFormat("de-DE",{maximumFractionDigits: 2, minimumFractionDigits: 2})
  }

export default ListPayroll