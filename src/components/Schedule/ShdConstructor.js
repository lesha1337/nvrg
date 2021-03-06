/**
 * Created by lesha on 03.01.2018.
 */
import React from 'react';
import {Table} from 'react-bootstrap';

class ShdConstructor extends React.Component {


    render = () => {
        const {nm, dates, prof, uchgr, d1, d2, d3, d4, d5, d6, d7} = {...this.props};
        return (
            <div className="centered">
                <h3><b>{nm}</b></h3>
                <p>{dates}</p>
                <div className="sentense">
                    <p>Профиль: {prof}</p>
                    <p>Учебные группы: {uchgr}</p>
                </div>
                <div className="shtable">
                <Table striped bordered hover >
                    <tbody>
                    <tr>
                        <th>Информационная рассылка о проведении смены</th>
                        <td>{d1}</td>
                    </tr>
                    <tr>
                        <th>Направление регионами списков кандидатов на участие в смене (школьников и учителей)</th>
                        <td>{d2}</td>
                    </tr>
                    <tr>
                        <th>Направление регионами списков кандидатов на участие в смене
                            (школьников и учителей)</th>
                        <td>{d3}</td>
                    </tr>
                    <tr>
                        <th>Проведение онлайн-тестирования</th>
                        <td>{d4}</td>
                    </tr>
                    <tr>
                        <th>Отбор регионов-участников</th>
                        <td>{d5}</td>
                    </tr>
                    <tr>
                        <th>Утверждение регионом списков участников смены</th>
                        <td>{d6}</td>
                    </tr>
                    <tr>
                        <th>Направление регионом необходимых документов</th>
                        <td>{d7}</td>
                    </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }

}


export default ShdConstructor