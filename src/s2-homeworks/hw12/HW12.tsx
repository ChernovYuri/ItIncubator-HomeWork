import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeIdAC, themeType} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";
import {log} from "util";

/*
* 1 + в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 + получить themeId из редакса
* 3 + дописать тип и логику функции change
* 4 + передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    let themeId = useSelector<AppStoreType, themeType>(state => state.theme)
    let dispatch = useDispatch()
    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeIdAC(Number(id)))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId.themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>
            <hr/>
            <div className={s2.hw}>
                <div className={s.selectTitle}>Выберите тему</div>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    value={themeId.themeId}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12
