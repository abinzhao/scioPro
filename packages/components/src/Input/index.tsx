import React from 'react';
import { InputProps } from './type';
import InputComp from './comm/input';
import SearchComp from './comm/search';
import TextAreaComp from './comm/textArea';

/**
 *
 * Input 输入框
 * @param Search 搜索
 * @param TextArea 文本域
 * @returns React.Component
 */
const Input = (props: InputProps) => <InputComp {...props} />;

Input.Search = (props: InputProps) => <SearchComp {...props} />;
Input.TextArea = (props: InputProps) => <TextAreaComp {...props} />;

export default Input;
