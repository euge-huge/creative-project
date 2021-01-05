import React, { useState } from "react";
import {Transaction} from "../components/moneyPage/Transaction";
import { createTransaction } from "../../actions/moneyActions";
import { useDispatch, useSelector } from "react-redux";

export const MoneyPage = () => {
  const dispatch = useDispatch();

  // const transactions = useSelector((state) => state.money.all);

  const incomeTransactions = useSelector((state) => state.money.income);
  const outComeTransactions = useSelector((state) => state.money.outcome);


  const [outcomeForm, setOutcomeForm] = useState({
    outcomeAmount: 0,
    outcomeTitle: ""
  })

  const [incomeForm, setIncomeForm] = useState({
    incomeAmount: 0,
    incomeTitle: ""
  })

  const onOutcomeChangeHandler = (e) => {
    setOutcomeForm({
      ...outcomeForm,
      [e.target.name]: e.target.value,
    });
  };

  const onIncomeChangeHandler = (e) => {
    setIncomeForm({
      ...incomeForm,
      [e.target.name]: e.target.value,
    });
  };

  const createOutcome = (e) => {
    e.preventDefault();

    const newOutcome = {
      title: outcomeForm.outcomeTitle,
      type: "outcome",
      amount: outcomeForm.outcomeAmount
    }

    dispatch(createTransaction(newOutcome));
  }

  const createIncome = (e) => {
    e.preventDefault();

    const newIncome = {
      title: incomeForm.incomeTitle,
      type: "income",
      amount: incomeForm.incomeAmount
    }

    dispatch(createTransaction(newIncome));
  }

  return (
    <div className="page">
      <h3 className="text-center mb-3">Ваши располагаемые финансы: <span className={(incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) >0 ? "text-success" : "text-danger"}>{(incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) != null ? (incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) : "-"}</span></h3>
      <div className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{width: "90%", margin: "0 auto"}}>
              <div className="card-header text-white text-center bg-danger">
                Расходы
              </div>
              <div className="card-body">
                {!outComeTransactions.length && (<div className="text-muted text-center">Расходов пока нет...</div>)}
                {outComeTransactions.map(trans => (<Transaction key={trans._id} id={trans._id} type="outcome" title={trans.title} amount={trans.amount}/>))}
                <hr/>
                <p className="text-muted text-right">Всего потрачено: <span className="text-danger">{outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)}</span></p>
                <hr/>

                <form className="form-inline">
                  <div className='row'>
                    <div className="form-group col-sm-3">
                      <label htmlFor="outcomeAmount" className="sr-only">Email</label>
                      <input type="number" min="0" style={{maxWidth: "100%", fontSize: "13px"}} className="form-control" id="outcomeAmount" placeholder="Сумма" name="outcomeAmount" value={outcomeForm.outcomeAmount} onChange={onOutcomeChangeHandler}/>
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="outcomeTitle" className="sr-only">Описание</label>
                      <input type="text" style={{maxWidth: "100%", fontSize: "13px"}} className="form-control" id="outcomeTitle" placeholder="Краткое описание" name="outcomeTitle" value={outcomeForm.outcomeTitle} onChange={onOutcomeChangeHandler} />
                    </div>
                    <div className="col-sm-3">
                      <button onClick={createOutcome} style={{width: "100%", fontSize: "13px"}} className="btn btn-danger">Создать</button>
                    </div>
                  </div>      
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="card" style={{width: "90%", margin: "0 auto"}}>
              <div className="card-header text-white text-center bg-success">
                Доходы
              </div>
              <div className="card-body">
                {!incomeTransactions.length && (<div className="text-muted text-center">Доходов пока нет...</div>)}
                {incomeTransactions.map(trans => (<Transaction key={trans._id} id={trans._id} type="income" title={trans.title} amount={trans.amount}/>))}

                <hr/>
                <p className="text-muted text-right">Всего заработано: <span className="text-success">{incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)}</span></p>
                <hr/>

                <form className="form-inline">
                  <div className='row'>
                    <div className="form-group col-sm-3">
                      <label htmlFor="incomeAmount" className="sr-only">Email</label>
                      <input type="number"  min="0" style={{maxWidth: "100%", fontSize: "13px"}} className="form-control" id="incomeAmount" placeholder="Сумма" name="incomeAmount" value={incomeForm.incomeAmount} onChange={onIncomeChangeHandler}/>
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="incomeTitle" className="sr-only">Описание</label>
                      <input type="text" style={{maxWidth: "100%", fontSize: "13px"}} className="form-control" id="incomeTitle" placeholder="Краткое описание" name="incomeTitle" value={incomeForm.incomeTitle} onChange={onIncomeChangeHandler}/>
                    </div>
                    <div className="col-sm-3">
                      <button onClick={createIncome} style={{width: "100%", fontSize: "13px"}} className="btn btn-success">Создать</button>
                    </div>
                  </div>      
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
