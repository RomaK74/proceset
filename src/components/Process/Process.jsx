import React from 'react';
import Count from '../../images/count.svg';
import Time from '../../images/time.svg';
import ActiveTime from '../../images/activeTime.svg';
import Employee from '../../images/Employee.svg';
import Scenaries from '../../images/scenarios.svg';
import Vector from '../../images/Vector.svg';
import './Process.scss';
import moment from 'moment';
import 'moment/locale/ru';
import {Link} from 'react-router-dom';

export const Process = (props) => {
    const {
        averageActiveTime, averageLeadTime, employeesInvolvedProcess,
        end, loading, name, numberOfExecutions, numberOfScenarios, start
    } = props;

    const formatAverageTime = (time) => {
        let tempTime = moment.duration(time);
        return tempTime.hours() + " ч " + tempTime.minutes() + " мин";
    }

    const formatDate = (date) => {
        moment.locale('ru');
        return moment(date * 1000).locale('ru').format("LL").slice(0, -3);
    }

    const activePercent = ((averageActiveTime / averageLeadTime) * 100).toFixed(1);
    const activeTime = formatAverageTime(averageActiveTime);
    const leadTime = formatAverageTime(averageLeadTime);
    const dateStart = formatDate(start);
    const dateLoading = formatDate(loading);
    const dateEnd = formatDate(end);

    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 :
            [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

    const wordsScenarios = ['сценарий', 'сценария', 'сценариев'];
    const wordsEmployees = ['сотрудник', 'сотрудника', 'сотрудников'];
    const scenarios = declOfNum(numberOfScenarios % 10, wordsScenarios);
    const employees = declOfNum(employeesInvolvedProcess % 10, wordsEmployees);

    return (
        <div className="process">
            <div className="process__header">
                <div className="process__title">{name}</div>
                <div className="process__link">
                    <Link to="#">На карту процесса <img src={Vector} alt="link"/></Link>
                </div>
            </div>
            <div className="process__content">
                <div className="process__columns">
                    <div className="process__column">
                        <div className="row">
                            <div className="row__img"><img src={Count} alt="цикл"/></div>
                            <div className="row__text">
                                <div className="row__info_big">{numberOfExecutions}</div>
                                <div className="row__label">выполнено раз</div>
                            </div>
                        </div>
                    </div>
                    <div className="process__column time">
                        <div className="row">
                            <div className="row__img"><img src={Time} alt="среднее время"/></div>
                            <div className="row__text">
                                <div className="row__info">{leadTime}</div>
                                <div className="row__label">среднее время выполнения</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row__img"><img src={ActiveTime} alt="активное время"/></div>
                            <div className="row__text">
                                <div className="row__info">{activeTime} ({activePercent}%)</div>
                                <div className="row__label">среднее активное время</div>
                            </div>
                        </div>
                    </div>
                    <div className="process__column empproc">
                        <div className="row">
                            <div className="row__img"><img src={Employee} alt="сотрудники"/></div>
                            <div className="row__text">
                                <div className="row__info">{employeesInvolvedProcess} {employees}</div>
                                <div className="row__label">участвует в процессе</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row__img"><img src={Scenaries} alt="сценарии"/></div>
                            <div className="row__text">
                                <div className="row__info">{numberOfScenarios} {scenarios}</div>
                                <div className="row__label">в процессе</div>
                            </div>
                        </div>
                    </div>
                    <div className="process__column dates">
                        <div className="process__cycle">
                            <div className="process__stage">Начало</div>
                            <div className="process__date">{dateStart}</div>
                        </div>
                        <div className="process__cycle">
                            <div className="process__stage">Окончание</div>
                            <div className="process__date">{dateEnd}</div>
                        </div>
                        <div className="process__cycle">
                            <div className="process__stage">Загрузка</div>
                            <div className="process__date">{dateLoading}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}