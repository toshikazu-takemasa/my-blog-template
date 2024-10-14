import React, { useState } from 'react';
import { Gift } from 'lucide-react';

// ミッションデータを取得する関数（サーバーサイドで実行）
export async function getServerSideProps() {
  try {
    getMissionStatus()
  .then(({ missionConfig, missionCounters }) => {
    // ページ描画処理
    const missionConfig = missionConfig.json();
    const missionCounters = missionCounters.json();

  })
  .catch(error => {
    // エラーハンドリング
    console.error('Error:', error);
  });

   
    return {
      props: {
        missionConfig,
        missionCounters,
      },
    };
  } catch (error) {
    console.error('Failed to fetch mission data:', error);
    return {
      props: {
        error: 'データの取得に失敗しました。',
      },
    };
  }
}

const MissionStatus = ({ missionConfig, missionCounters, error }) => {
  const [activeTab, setActiveTab] = useState('regular');

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  const processMissionData = () => {
    const missionData = missionConfig.resource.mission;
    const viewContactTotal = missionCounters.counters.custom.view_contact.total.count;

    return Object.entries(missionData).map(([key, mission]) => ({
      id: key,
      type: mission.type || 'regular',
      description: mission.description,
      progress: viewContactTotal,
      total: mission.goal,
      reward: mission.reward.description,
      completed: viewContactTotal >= mission.goal
    }));
  };

  const missions = processMissionData();
  const filteredMissions = missions.filter(mission => mission.type === activeTab);

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 ${activeTab === 'regular' ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setActiveTab('regular')}
        >
          レギュラーミッション
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'limited' ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setActiveTab('limited')}
        >
          期間限定ミッション
        </button>
      </div>

      <div className="bg-gray-800 text-white p-2 mb-4 text-center">
        ミッション達成で必ず貰える！
      </div>

      {filteredMissions.map(mission => (
        <div key={mission.id} className="mb-4 border p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-bold">
              {mission.progress}/{mission.total}
            </div>
            {mission.completed && <span className="bg-black text-white px-2 py-1 text-sm">達成</span>}
          </div>
          <p className="mb-2">{mission.description}</p>
          <div className="flex items-center">
            <Gift size={20} className="mr-2" />
            <span>{mission.reward}</span>
            {mission.completed ? (
              <button className="ml-auto bg-black text-white px-4 py-2">受け取る</button>
            ) : (
              <div className="ml-auto text-gray-500">{mission.reward}</div>
            )}
          </div>
        </div>
      ))}

      <button className="w-full py-2 bg-gray-200 text-center">もっと見る</button>
    </div>
  );
};

export default MissionStatus;