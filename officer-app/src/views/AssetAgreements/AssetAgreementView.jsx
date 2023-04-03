import AssetAgreementTable from './components/AssetAgreementTable'
import './AssetAgreementView.scss'
import { useEffect, useState } from 'react'

function AssetAgreementView() {
    return (
        <div className='AssetAgreementView'>
            <div className='user-agreement-table'>
                <AssetAgreementTable></AssetAgreementTable>
            </div>
        </div>
    )
}

export default AssetAgreementView