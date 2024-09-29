import Checkbox from 'expo-checkbox'; // Nhập Checkbox từ expo-checkbox
import React, { useState } from 'react'; // Nhập React và useState
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native'; // Nhập các component từ React Native
import Icon from 'react-native-vector-icons/FontAwesome'; // Nhập biểu tượng từ FontAwesome

// Định nghĩa component Screen03
const Screen03 = ({ navigation }) => {
    // Khai báo các state để lưu trữ thông tin
    const [isChecked, setIsChecked] = useState(false);  // Trạng thái checkbox
    const [user, setUser] = useState('user1'); // Trạng thái cho username
    const [email, setEmail] = useState('tienphat'); // Trạng thái cho email
    const [password, setPassword] = useState('123456'); // Trạng thái cho password

    const [info, setInfo] = useState({
        user: '',
        email: '',
        password: ''
    });

    return (
        <View>
            {/* Hình ảnh đầu màn hình */}
            <View style={{ marginBottom: 20 }}>
                {/* Biểu tượng mũi tên (bị chú thích) */}
                {/* <Icon
                    name='arrow-left'
                    size={24}
                    color="#000"
                    onPress={() => { navigation.navigate("Screen01") }}
                /> */}
                <Image source={require("../assets/Data/Image 20.png")} style={{ height: 200, width: '100%' }} />
            </View>

            <View style={{ padding: 20 }}> {/* Padding cho toàn bộ View */}
                {/* Văn bản chào mừng */}
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                        Welcome
                    </Text>
                </View>

                {/* Form nhập liệu */}
                <View>
                    {/* Input cho email */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your email" // Placeholder cho input
                            style={{ flex: 1 }} // Chiếm toàn bộ không gian
                            value={email} // Giá trị của input
                            onChangeText={setEmail} // Cập nhật trạng thái khi thay đổi
                        />
                    </View>

                    {/* Input cho password */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your password" // Placeholder cho input
                            secureTextEntry // Ẩn mật khẩu
                            style={{ flex: 1 }} // Chiếm toàn bộ không gian
                            value={password} // Giá trị của input
                            onChangeText={setPassword} // Cập nhật trạng thái khi thay đổi
                        />
                    </View>
                </View>

                {/* Nút Login */}
                <View>
                    <TouchableOpacity
                        style={{
                            width: '94%', 
                            marginLeft: 16, 
                            marginTop: 11, 
                            backgroundColor: 'rgb(34, 200, 247)', // Màu nền của nút
                            paddingVertical: 11, 
                            borderRadius: 20 // Bo tròn góc
                        }}
                        onPress={() => {
                            // Kiểm tra các trường nhập liệu trước khi điều hướng
                            if (user && email && password) {
                                setInfo({
                                    user: user,
                                    email: email,
                                    password: password
                                });
                                navigation.navigate("Screen04"); // Điều hướng đến Screen04
                                console.log(info); // In thông tin ra console
                            } else {
                                alert('Please fill all fields and agree to the terms.'); // Thông báo nếu chưa điền đủ
                            }
                        }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

// Xuất component để sử dụng ở nơi khác trong ứng dụng
export default Screen03;
