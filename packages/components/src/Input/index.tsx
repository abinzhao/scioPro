import React from 'react';
import { InputProps } from './type';
import InputComp from './comm/input';
import SearchComp from './comm/search';

/**
 *
 * Input 输入框
 * @param Search 搜索
 * @returns React.Component
 */
const Input = (props: InputProps) => <InputComp {...props} />;

Input.Search = (props: InputProps) => <SearchComp {...props} />;

export default Input;
