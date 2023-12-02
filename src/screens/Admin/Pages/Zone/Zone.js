import React, { useState, useEffect, useRef } from 'react'
import './Zone.scss'
import { useHistory } from 'react-router-dom'
import { AiFillCloseCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { hideLoader, showLoader } from '../../../../components/loader'
import { axiosCalls } from '../../../../components/_api'
import { NotificationManager } from 'react-notifications'
import LoaderImg from '../../../../assets/loader.gif'

function Users() {
  const { history } = useHistory
  const [createZone, setCreateZone] = useState(false)
  const [editZone, setEditZone] = useState(false)
  const [deleteZone, setDeleteZone] = useState(false)
  const [loading, setLoading] = useState(true)
  const [zoneList, setZoneList] = useState()
  const [typeInput, setTypeInput] = useState('')
  const [zoneInput, setZoneInput] = useState('')
  const [documentInput, setDocumentInput] = useState('')
  const [minInput, setMinInput] = useState(0)
  const [maxInput, setMaxInput] = useState(0)
  const [chargeInput, setChargeInput] = useState(0)
  const [selectZone, setSelectZone] = useState({})
  const [selectedZone, setSelectedZone] = useState('export')

  //Fetching of Zone Rates >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const fetchZone = async () => {
    const res = await axiosCalls('zonerates/fetch', 'GET')
    if (res) {
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      if (isMounted.current) {
        // check if the component is still mounted
        setZoneList(res.data)
        setLoading(false)
      }
    }
  }
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    fetchZone()
    return () => {
      isMounted.current = false // cleanup function to cancel the request if the component unmounts
    }
  }, [])
  //creating of Admin user >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const createZoneRate = async () => {
    const data = {
      type: typeInput,
      zone: zoneInput,
      document: documentInput,
      min: minInput,
      max: maxInput,
      charge: chargeInput,
    }
    showLoader()
    const res = await axiosCalls('zonerates/create', 'POST', data)
    if (res?.er) {
      NotificationManager.error('Error', res.er.message)
      setCreateZone(false)
      hideLoader()
      return
    }
    NotificationManager.success('Successs', res.message)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }
  //Deleting & Editing of Admin user >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const selectZoneX = (id, type) => {
    const select = zoneList.find((item) => item._id === id)
    setSelectZone(select)
    setTypeInput(select.type)
    setZoneInput(select.zone)
    setDocumentInput(select.document)
    setMinInput(select.min)
    setMaxInput(select.max)
    setChargeInput(select.charge)

    if (type === 'edit') {
      setEditZone(true)
    } else if (type === 'delete') {
      setDeleteZone(true)
    }
  }
  const deleteZoneRate = async () => {
    showLoader()
    const data = {
      type: typeInput,
      zone: zoneInput,
      document: documentInput,
      min: minInput,
      max: maxInput,
      charge: chargeInput,
    }
    const res = await axiosCalls(
      `zonerates/delete?id=${selectZone._id}`,
      'DELETE',
      data
    )
    if (res?.er) {
      NotificationManager.error('Error', res.er.message)
      hideLoader()
      setDeleteZone(false)
      return
    }
    NotificationManager.success('Successs', res.message)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }
  const editZoneRate = async () => {
    const data = {
      type: typeInput,
      zone: zoneInput,
      document: documentInput,
      min: minInput,
      max: maxInput,
      charge: chargeInput,
    }
    showLoader()
    const res = await axiosCalls(
      `zonerates/update?id=${selectZone._id}`,
      'PUT',
      data
    )
    if (res?.er) {
      NotificationManager.error('Error', res.er.message)
      setCreateZone(false)
      hideLoader()
      return
    }
    NotificationManager.success('Successs', res.message)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <div className='full-zone'>
      <div className='home_pagex'>
        <div className='home_tag'>
          <h1>Zone Rates</h1>
          <button onClick={() => setCreateZone(true)}> Create Zone Rate</button>
        </div>
        <div className='home_tables'>
          <div className='left' style={{ minHeight: '60vh' }}>
            <div className='swutc'>
              <div className='vut'>
                <div
                  className={
                    selectedZone === 'export' ? 'tabx activex' : 'tabx'
                  }
                  onClick={() => setSelectedZone('export')}
                >
                  Export
                </div>
                <div
                  className={
                    selectedZone === 'import' ? 'tabx activex' : 'tabx'
                  }
                  onClick={() => setSelectedZone('import')}
                >
                  Import
                </div>
                <div
                  className={
                    selectedZone === 'domestic' ? 'tabx activex ' : 'tabx'
                  }
                  onClick={() => setSelectedZone('domestic')}
                >
                  Domestic
                </div>
              </div>
            </div>
            {loading ? (
              <div className='loadings'>
                <img src={LoaderImg} alt='' />
              </div>
            ) : (
              <>
                {zoneList.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Type</th>
                        <th>Zone</th>
                        <th>Document</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Charge</th>
                        <th></th>
                      </tr>
                    </thead>
                    {selectedZone === 'export' ? (
                      <tbody>
                        {zoneList
                          .filter((item) => item.type === 'export')
                          .map((item, i) => (
                            <tr key={item._id}>
                              <td>{1 + i}</td>
                              <td className='count'>{item.type}</td>
                              <td>{item.zone}</td>
                              <td className='count'>{`${item.document}`}</td>
                              <td> {item.min} kg</td>
                              <td> {item.max} kg</td>
                              <td>{item.charge.toLocaleString()} %</td>
                              <td className='icons'>
                                <AiFillEdit
                                  className='put'
                                  title='edit zone rate'
                                  onClick={() => selectZoneX(item._id, 'edit')}
                                />
                                <AiFillDelete
                                  className='del'
                                  title='delete zone rate'
                                  onClick={() =>
                                    selectZoneX(item._id, 'delete')
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    ) : (
                      <>
                        {selectedZone === 'import' ? (
                          <tbody>
                            {zoneList
                              .filter((item) => item.type === 'import')
                              .map((item, i) => (
                                <tr key={item._id}>
                                  <td>{1 + i}</td>
                                  <td className='count'>{item.type}</td>
                                  <td>{item.zone}</td>
                                  <td className='count'>{`${item.document}`}</td>
                                  <td> {item.min} kg</td>
                                  <td> {item.max} kg</td>
                                  <td>{item.charge.toLocaleString()} %</td>
                                  <td className='icons'>
                                    <AiFillEdit
                                      className='put'
                                      title='edit zone rate'
                                      onClick={() =>
                                        selectZoneX(item._id, 'edit')
                                      }
                                    />
                                    <AiFillDelete
                                      className='del'
                                      title='delete zone rate'
                                      onClick={() =>
                                        selectZoneX(item._id, 'delete')
                                      }
                                    />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        ) : (
                          <tbody>
                            {zoneList
                              .filter((item) => item.type === 'domestic')
                              .map((item, i) => (
                                <tr key={item._id}>
                                  <td>{1 + i}</td>
                                  <td className='count'>{item.type}</td>
                                  <td>{item.zone}</td>
                                  <td className='count'>{`${item.document}`}</td>
                                  <td> {item.min} kg</td>
                                  <td> {item.max} kg</td>
                                  <td>{item.charge.toLocaleString()} %</td>
                                  <td className='icons'>
                                    <AiFillEdit
                                      className='put'
                                      title='edit zone rate'
                                      onClick={() =>
                                        selectZoneX(item._id, 'edit')
                                      }
                                    />
                                    <AiFillDelete
                                      className='del'
                                      title='delete zone rate'
                                      onClick={() =>
                                        selectZoneX(item._id, 'delete')
                                      }
                                    />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        )}
                      </>
                    )}
                  </table>
                ) : (
                  <h1>No Zones To Show</h1>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className={createZone ? 'zone-create activex' : 'zone-create'}>
        <div className='close'>
          <AiFillCloseCircle onClick={() => setCreateZone(false)} />
        </div>
        <h1>Create Zone Rate</h1>
        <div className='form'>
          <div className='cards'>
            <p>Type</p>
            <select
              name=''
              id=''
              onChange={(e) => setTypeInput(e.target.value)}
            >
              <option value=''>-Select-</option>
              <option value='domestic'>Domestic</option>
              <option value='export'>Export</option>
              <option value='import'>Import</option>
            </select>
          </div>
          <div className='cards'>
            <p>Zone</p>
            <input type='text' onChange={(e) => setZoneInput(e.target.value)} />
          </div>
          <div className='cards'>
            <p>Document</p>
            <select
              name=''
              id=''
              onChange={(e) => setDocumentInput(e.target.value)}
            >
              <option value=''>-Select-</option>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <div className='cards'>
            <p>Min</p>
            <input
              type='number'
              onChange={(e) => setMinInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Max</p>
            <input
              type='number'
              min={parseInt(minInput)}
              onChange={(e) => setMaxInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Charge</p>
            <input
              type='number'
              onChange={(e) => setChargeInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <br />
            <button onClick={createZoneRate}>Create</button>
          </div>
        </div>
      </div>
      <div className={editZone ? 'zone-create activex' : 'zone-create'}>
        <div className='close'>
          <AiFillCloseCircle onClick={() => setEditZone(false)} />
        </div>
        <h1>Edit Zone Rate</h1>
        <div className='form'>
          <div className='cards'>
            <p>Type</p>
            <select
              name=''
              id=''
              onChange={(e) => setTypeInput(e.target.value)}
            >
              <option value={selectZone.type}>{selectZone.type}</option>
              {selectZone.type === 'domestic' ? (
                <>
                  <option value='export'>Export</option>
                  <option value='import'>Import</option>
                </>
              ) : (
                <>
                  {selectZone.type === 'export' ? (
                    <>
                      <option value='domestic'>Domestic</option>
                      <option value='import'>Import</option>
                    </>
                  ) : (
                    <>
                      <option value='domestic'>Domestic</option>
                      <option value='export'>Export</option>
                    </>
                  )}
                </>
              )}
            </select>
          </div>
          <div className='cards'>
            <p>Zone</p>
            <input
              type='text'
              defaultValue={selectZone.zone}
              onChange={(e) => setZoneInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Document</p>
            <select
              name=''
              id=''
              onChange={(e) => setDocumentInput(e.target.value)}
            >
              <option value={selectZone.document}>
                {`${selectZone.document}`}
              </option>
              {selectZone.document ? (
                <option value='false'>False</option>
              ) : (
                <option value='true'>True</option>
              )}
            </select>
          </div>
          <div className='cards'>
            <p>Min</p>
            <input
              type='number'
              defaultValue={selectZone.min}
              onChange={(e) => setMinInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Max</p>
            <input
              type='number'
              defaultValue={selectZone.max}
              onChange={(e) => setMaxInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Charge</p>
            <input
              type='number'
              defaultValue={selectZone.charge}
              onChange={(e) => setChargeInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <br />
            <button onClick={editZoneRate}>Edit</button>
          </div>
        </div>
      </div>
      <div className={deleteZone ? 'zone-create activex' : 'zone-create'}>
        <div className='close'>
          <AiFillCloseCircle onClick={() => setDeleteZone(false)} />
        </div>
        <h1>Delete Zone Rate</h1>
        <div className='form'>
          <div className='cards'>
            <p>Are you sure you want to delete this {selectZone.zone}?</p>
          </div>

          <div className='cards'>
            <br />
            <button className='delete' onClick={deleteZoneRate}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
