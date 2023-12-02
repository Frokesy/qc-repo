import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

export const SpecifyItem = ({ handleSpecifiedItemSubmit, specifiedItems }) => {
  const schema = Yup.object().shape({
    items: Yup.array().of(
      Yup.object().shape({
        description: Yup.string().required('This field is required'),
        itemQuantity: Yup.number().required('This field is required'),
        grossValue: Yup.number().required('This field is required'),
        itemValue: Yup.number().required('This field is required'),
      })
    ),
  })

  return (
    <Formik
      initialValues={{
        items: specifiedItems,
      }}
      onSubmit={(values) => {
        handleSpecifiedItemSubmit(values)
      }}
      validationSchema={schema}
      render={({ values, errors, touched, handleReset, setFieldValue }) => (
        <Form>
          <FieldArray
            name='items'
            render={(arrayHelpers) => (
              <div>
                {values.items && values.items.length > 0
                  ? values.items.map((data, index) => (
                      <div key={index} className='itemArray'>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
                          {values.items.length > 1 ? (
                            <p
                              onClick={() => {
                                if (values.items.length > 1) {
                                  arrayHelpers.remove(index)
                                }
                                return
                              }}
                              style={{ cursor: 'pointer', color: 'red' }}
                            >
                              x
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>Item description</label>
                            <Field name={`items[${index}].description`} />
                            {errors &&
                              errors.items &&
                              errors.items[index] &&
                              errors.items[index].description &&
                              touched &&
                              touched.items &&
                              touched.items[index] &&
                              touched.items[index].description && (
                                <div
                                  className='field-error'
                                  style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                  }}
                                >
                                  {errors.items[index].description}
                                </div>
                              )}
                          </div>
                        </div>

                        <div>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>Item quantity</label>
                            <Field
                              name={`items[${index}].itemQuantity`}
                              type='number'
                            />
                            {errors &&
                              errors.items &&
                              errors.items[index] &&
                              errors.items[index].itemQuantity &&
                              touched &&
                              touched.items &&
                              touched.items[index] &&
                              touched.items[index].itemQuantity && (
                                <div
                                  className='field-error'
                                  style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                  }}
                                >
                                  {errors.items[index].itemQuantity}
                                </div>
                              )}
                          </div>
                        </div>
                        <div>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>Weight</label>
                            <Field
                              name={`items[${index}].grossValue`}
                              type='number'
                            />
                            {errors &&
                              errors.items &&
                              errors.items[index] &&
                              errors.items[index].grossValue &&
                              touched &&
                              touched.items &&
                              touched.items[index] &&
                              touched.items[index].grossValue && (
                                <div
                                  className='field-error'
                                  style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                  }}
                                >
                                  {errors.items[index].grossValue}
                                </div>
                              )}
                          </div>
                        </div>

                        <div>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>Item price</label>
                            <Field
                              name={`items[${index}].itemValue`}
                              type='number'
                            />
                            {errors &&
                              errors.items &&
                              errors.items[index] &&
                              errors.items[index].itemValue &&
                              touched &&
                              touched.items &&
                              touched.items[index] &&
                              touched.items[index].itemValue && (
                                <div
                                  className='field-error'
                                  style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                  }}
                                >
                                  {errors.items[index].itemValue}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <p
                      onClick={() =>
                        arrayHelpers.push({
                          itemName: '',
                          description: '',
                          itemQuantity: '',
                          netValue: '',
                          grossValue: '',
                          itemValue: '',
                        })
                      }
                      style={{
                        cursor: 'pointer',
                        color: 'green',
                        fontSize: '12px',
                      }}
                    >
                      Specify more item in package
                    </p>
                  </div>

                  <div className='btnsfd'>
                    <button className='where-address-button' type='submit'>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  )
}
