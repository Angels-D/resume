import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Checkbox,
  Select,
} from 'antd';
import { FormItemProps } from 'antd/lib/form';
import _ from 'lodash-es';
import { ColorPicker } from './ColorPicker';
import { getLocale, getLanguage } from '@/locale';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

const { RangePicker } = DatePicker;

type Props = {
  /** 表单配置 */
  config: Array<{
    type: string /** 组件类型 */;
    attributeId: string;
    displayName: string;
    formItemProps?: FormItemProps;
    cfg?: {
      [k: string]: any /**其它和组件本身有关的配置 */;
    };
  }>;
  /** 表单已配置内容 */
  value: {
    [key: string]: any;
  };
  onChange: (v: any) => void;
  /** 列表型内容 */
  isList: boolean;
};

const FormItemComponentMap = (type: string) => (
  props: { value: any; onChange?: (v) => void } = { value: null }
) => {
  switch (type) {
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'select':
      return <Select {...props} />;
    case 'input':
      return <Input {...props} />;
    case 'number':
      return <InputNumber {...props} />;
    case 'textArea':
      return <Input.TextArea {...props} />;
    case 'color-picker':
      return <ColorPicker {...props} />;
    case 'date':
      return <RangePicker {...props} />;
    default:
      return <Input />;
  }
};

export const FormCreator: React.FC<Props> = props => {
  const i18n = getLocale();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const datas = Object.keys(props.value || {}).map(d => ({
      name: [d],
      value: props.value[d],
    }));
    setFields(datas);
  }, [props.value]);

  const handleChange = (values: any) => {
    if ('edu_time' in values) {
      values.edu_time = [
        values.edu_time[0].format('YYYY.MM'),
        values.edu_time[1].format('YYYY.MM'),
      ];
    } else if ('work_time' in values) {
      values.work_time = [
        values.work_time[0].format('YYYY.MM'),
        values.work_time[1].format('YYYY.MM'),
      ];
    } else if ('project_time' in values) {
      values.project_time = [
        values.project_time[0].format('YYYY.MM'),
        values.project_time[1].format('YYYY.MM'),
      ];
    }
    props.onChange(values);
  };
  const formProps = {
    [props.isList ? 'onFinish' : 'onValuesChange']: handleChange,
  };

  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        initialValues={props.value}
        fields={fields}
        {...formProps}
      >
        {_.map(props.config, c => {
          if (c.type == 'date') {
            if (getLanguage() == 'zh_CN') {
              c.cfg.locale = { ...locale };
            }
            if (props.value?.[c.attributeId].map) {
              const date = props.value[c.attributeId].map(item =>
                moment(item ?? undefined)
              );
              props.value[c.attributeId] = { ...date };
            }
          }
          return (
            <Form.Item
              key={c.attributeId}
              label={c.displayName}
              wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
              name={c.attributeId}
              {...(c.formItemProps || {})}
            >
              {FormItemComponentMap(c.type)({
                ...(c.cfg || {}),
                value: _.get(props.value, [c.attributeId]),
              })}
            </Form.Item>
          );
        })}
        {props.isList && (
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              {i18n.get('提交')}
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};
