
import './Changepassword.js';
import {
  Form,
  Input,
  // Select,
  Row,
  Col,
  Button,
} from 'antd';
// const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Changepassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );







  return <div className="container">
    <header className='page-header'></header>
    <main className='page-main'>
      <Row>
        <Col span={12}><div className="leftside-box">
          <p>"Amazing things will happen when you listen to the consumer"</p>
        </div></Col>


        <Col span={12}>
        <div className="rightside-box">
                <div className='heading'>
                    <h1>Topaz</h1>
                    <h3>Create Password</h3></div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 24}}
            wrapperCol={{ span: 24}}
            requiredMark={false}
           colon={false}
        
          >


            <Form.Item
              name="Enter password"
              label="Enter Password"
        
              
              rules ={[
                                        {
                                       required:true,
                                        message:'Please input your password!' },
                                        {whitespace:true},{min:8},
                                   ]} 
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>






        
            <Form.Item {...tailFormItemLayout}>
          
        <Button  htmlType="submit" className="login-form-button">
       Submit
        </Button>
        </Form.Item>
    </Form>
        

          <div className='form-footer'>
            <footer > ©2022 Topaz All rights reserved.Terms of service </footer>
          </div></div></Col>
      </Row>










    </main>
    <footer className='page-footer'> </footer>
  </div>;
};

export default Changepassword;

