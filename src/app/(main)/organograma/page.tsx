'use client';
import React, { Suspense } from 'react';

const Organograma = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Organograma</h5>
                        <div style={{ textAlign: 'center' }}>
                            <img src={`/pv/images/notfound/emconstrucao.png`} alt="Wed logo"
                                 className="mb-5 w-24rem flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Organograma;
