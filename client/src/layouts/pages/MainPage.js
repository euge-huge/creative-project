import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

export const MainPage = () => {
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks.all);
  const incomeTransactions = useSelector((state) => state.money.income);
  const outComeTransactions = useSelector((state) => state.money.outcome);
  const lessons = useSelector(state => state.schedule.all);

  return (
    <div className="page">
      <h3 className='text-center'>Здравствуйте, {user.firstName}!</h3>

      <div className="card mt-4" style={{width: "65%", margin: "0 auto", fontSize: "17px"}}>
        <div className="card-header text-center">Краткая информация</div>
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">Всего элементов в <Link to="/schedule">расписании</Link> —  {lessons.length}</li>
            <li class="list-group-item">Всего <Link to="/tasks">задач</Link> — {tasks.length} </li>
            <li class="list-group-item">Ваши располагаемые <Link to="/money">финансы</Link> — <span className={(incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) >0 ? "text-success" : "text-danger"}>{(incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) != null ? (incomeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0) - outComeTransactions.reduce(((total, cur) => (total + parseInt(cur.amount))), 0)) : "-"}</span></li>
          </ul>
      </div>

      <div className="card mt-4 mb-5" style={{width: "95%", margin: "0 auto", fontSize: "15px"}}>
        <div className="card-header text-center">Инструкция</div>
        <div className="card-body">
          Вы полпали в приложение разработанное для упрощения простых задача, используя для этого
           элементарные инструменты. <br/><br/>
          Навигация происходит в списке слева. <br/><br/>
          На вкладке <Link to="/schedule">Расписание</Link> вы можете просто сформировать ваше собственное расписание, чтобы всегда знать когда вы заняты, а когда нет. <br/><br/>
          На вкладке <Link to="/tasks">Задачи</Link> вы можете создать задачи разной важности и с определенным сроком, чтобы ничего не забыть. <br/><br/>
          На вкладке <Link to="/money">Финансы</Link> вы можете просто укзать ваши доходы или расходы, чтобы всегда контролировать свой бюджет.<br/><br/>
          На вкладке <Link to="/profile">Профиль</Link> вы можете посмотреть информацию о себе или изменить ее, или же вовсе удалить аккаунт.
          <h6 class="card-subtitle mt-4 text-muted text-right" style={{fontSize: "12px"}}>Быстров Евгений, 8К93, ТПУ, 2021</h6>
        </div>
      </div>
    </div>
  );
};
