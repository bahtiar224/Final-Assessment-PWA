import Button from '@common_button';
import PasswordField from '@common_password';
import Select from '@common_select';
import TextField from '@common_textfield';
import Typography from '@common_typography';
import useStyles from '@core_modules/register/pages/default/components/style';
import DateDayJs from '@date-io/dayjs';
import { breakPointsUp } from '@helper_theme';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import OtpBlock from '@plugin_otp';
import classNames from 'classnames';
import ReCAPTCHA from 'react-google-recaptcha';
import { Card, CardContent } from '@root/node_modules/@material-ui/core/index';

const RegisterView = ({
    t,
    formik,
    enableOtp,
    setdisabled,
    handleChangePhone,
    handleWa,
    handleChangeDate,
    phoneIsWa,
    enableRecaptcha,
    sitekey,
    handleChangeCaptcha,
    disabled,
    recaptchaRef,
    gender,
    dob,
}) => {
    const styles = useStyles();
    const desktop = breakPointsUp('sm');

    return (
        <div className={classNames('row')}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <Card className={classNames(styles.card_custom)}>
                    <CardContent>
                        <form className={classNames(styles.container)} onSubmit={formik.handleSubmit}>
                            <TextField
                                label={t('common:form:firstName')}
                                name="firstName"
                                colors="white"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={!!(formik.touched.firstName && formik.errors.firstName)}
                                errorMessage={(formik.touched.firstName && formik.errors.firstName) || null}
                            />
                            <TextField
                                label={t('common:form:lastName')}
                                name="lastName"
                                colors="white"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={!!(formik.touched.lastName && formik.errors.lastName)}
                                errorMessage={(formik.touched.lastName && formik.errors.lastName) || null}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                colors="white"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={!!(formik.touched.email && formik.errors.email)}
                                errorMessage={(formik.touched.email && formik.errors.email) || null}
                            />
                            {gender && (
                                <Select
                                    className="genderField"
                                    options={[{ label: 'Male', value: 1 }, { label: 'Female', value: 2 }]}
                                    label={t('common:form:gender')}
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    helperText={t('common:form:select')}
                                    error={!!(formik.touched.gender && formik.errors.gender)}
                                    errorMessage={(formik.touched.gender && formik.errors.gender) || null}
                                />
                            )}
                            {dob && (
                                <DatePicker
                                    fullWidth
                                    label={t('common:form:dob')}
                                    name="dob"
                                    value={formik.values.dob}
                                    onChange={handleChangeDate}
                                    error={!!(formik.touched.dob && formik.errors.dob)}
                                    helperText={(formik.touched.dob && formik.errors.dob) || null}
                                />
                            )}
                            <PasswordField
                                label="Password"
                                showVisible
                                showPasswordMeter
                                name="password"
                                colors="white"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={!!(formik.touched.password && formik.errors.password)}
                                errorMessage={(formik.touched.password && formik.errors.password) || null}
                            />
                            <TextField
                                label={t('common:form:confirm')}
                                type="password"
                                name="confirmPassword"
                                colors="white"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                                errorMessage={(formik.touched.confirmPassword && formik.errors.confirmPassword) || null}
                            />
                            {enableOtp ? (
                                <>
                                    <OtpBlock
                                        type="register"
                                        setDisabled={setdisabled}
                                        phoneProps={{
                                            name: 'phoneNumber',
                                            value: formik.values.phoneNumber,
                                            onChange: handleChangePhone,
                                            error: !!(formik.errors.phoneNumber && formik.touched.phoneNumber),
                                            errorMessage: (formik.touched.phoneNumber && formik.errors.phoneNumber) || null,
                                        }}
                                        codeProps={{
                                            name: 'otp',
                                            value: formik.values.otp,
                                            onChange: formik.handleChange,
                                            error: !!(formik.touched.otp && formik.errors.otp),
                                            errorMessage: (formik.touched.otp && formik.errors.otp) || null,
                                            footer: (
                                                <FormControlLabel
                                                    onChange={handleWa}
                                                    className={styles.checkWa}
                                                    control={<Checkbox name="whastapptrue" color="primary" size="small" />}
                                                    label={<Typography variant="p">{t('register:isWhatsapp')}</Typography>}
                                                />
                                            ),
                                        }}
                                    />
                                    {!phoneIsWa && (
                                        <TextField
                                            label={`${t('common:form:phoneNumber')} Whatsapp`}
                                            name="whatsappNumber"
                                            colors="white"
                                            value={formik.values.whatsappNumber}
                                            onChange={formik.handleChange}
                                            error={!!(formik.touched.whatsappNumber && formik.errors.whatsappNumber)}
                                            errorMessage={(formik.touched.whatsappNumber && formik.errors.whatsappNumber) || null}
                                        />
                                    )}
                                </>
                            ) : null}
                            <div className={styles.footer}>
                                <FormControlLabel
                                    value={formik.values.subscribe}
                                    onChange={formik.handleChange}
                                    name="subscribe"
                                    control={<Checkbox name="subscribe" color="primary" size="small" />}
                                    label={(
                                        <Typography variant="p" letter="capitalize" cclassName={classNames('row center', styles.font_color_grey)}>
                                            {t('register:subscribe')}
                                        </Typography>
                                    )}
                                    style={{ marginBottom: enableRecaptcha ? 25 : 0 }}
                                />

                                {
                                    enableRecaptcha ? (
                                        <>
                                            <ReCAPTCHA
                                                sitekey={sitekey}
                                                onChange={handleChangeCaptcha}
                                                ref={recaptchaRef}
                                            />
                                            { formik.errors.captcha && (
                                                <Typography color="red">{formik.errors.captcha}</Typography>
                                            )}
                                        </>
                                    ) : null
                                }
                                <Button
                                    disabled={disabled}
                                    fullWidth
                                    className={styles.btnSigin}
                                    variant="outlined"
                                    type="submit"
                                    align={desktop ? 'left' : 'center'}
                                >
                                    <Typography variant="span" type="bold" letter="uppercase" color="white">
                                        {t('register:button')}
                                    </Typography>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 hidden-mobile">
                <img
                    src="/banner_login.jpg"
                    width="100%"
                    alt="banner register"
                />
            </div>
        </div>
    );
};

const RegisterViewProvider = (props) => (
    <MuiPickersUtilsProvider utils={DateDayJs}>
        <RegisterView {...props} />
    </MuiPickersUtilsProvider>
);

export default RegisterViewProvider;
