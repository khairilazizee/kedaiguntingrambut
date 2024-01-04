import React from 'react'
import Card from '../components/Card/CardCustomer'
import Customer from '../components/Dashboard/Customer'
import Chart from '../components/Dashboard/Chart'

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-5 mb-5">
                <Card />
                <Card />
                <Card />
            </div>
            <Customer />
            <Chart />
        </div>
    )
}

export default Dashboard