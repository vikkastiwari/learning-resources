import React from "react";
import "./index.css"

export default function KanbanBoard(props) { 

	let [tasks, setTasks] = React.useState([
		{ name: '1', stage: 1 },
		{ name: '2', stage: 3 },
	]);
	let firstStage = 0, lastStage = 3;
	let [stagesNames, setStagesNames] = React.useState(['Backlog', 'To Do', 'Ongoing', 'Done']);
	const [inputValue, setInputValue] = React.useState('');
	let stagesTasks = [];
	for (let i = 0; i < stagesNames.length; ++i) {
		stagesTasks.push([]);
	}
	for (let task of tasks) {
		const stageId = task.stage;
		stagesTasks[stageId].push(task);
	}

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

	const handleSubmit = () => {
    console.log("Submitted value:", inputValue);
		if(inputValue){
			let task = { name: inputValue, stage: 0 };
			setTasks([...tasks, task]);
			setInputValue('');
		}
  };

	const stageNavHandler = (taskName, direction) => {
		const updatedTasks = tasks.map(task => {
			if (task.name === taskName) {
				if (direction === 'forward' && task.stage < lastStage) {
					return { ...task, stage: task.stage + 1 };
				} else if (direction === 'backward' && task.stage > firstStage) {
					return { ...task, stage: task.stage - 1 };
				}
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const deleteTask = (taskName) => {
		const updatedTasks = tasks.filter((_) => _.name!==taskName );
		setTasks(updatedTasks);
	}

	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<section className="mt-50 layout-row align-items-center justify-content-center">
				<input id="create-task-input" type="text" value={inputValue}  onChange={handleChange} className="large" placeholder="New task name" data-testid="create-task-input" />
				<button type="submit" onClick={handleSubmit} className="ml-30" data-testid="create-task-button" >Create task</button>
			</section>

			<div className="mt-50 layout-row">
				{stagesTasks.map((tasks, i) => {
					return (
						<div className="card outlined ml-20 mt-0" key={`${i}`}>
							<div className="card-text">
								<h4>{stagesNames[i]}</h4>
								<ul className="styled mt-50" data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return <li className="slide-up-fade-in" key={`${i}${index}`}>
											<div className="li-content layout-row justify-content-between align-items-center">
												<span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
												<div className="icons">
													<button disabled={task.stage === firstStage} onClick={() => stageNavHandler(task.name, 'backward')} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`}>
														<i className="material-icons">arrow_back</i>
													</button>
													<button disabled={task.stage === lastStage} onClick={() => stageNavHandler(task.name, 'forward')} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`}>
														<i className="material-icons">arrow_forward</i>
													</button>
													<button className="icon-only danger x-small mx-2" onClick={() => deleteTask(task.name)} data-testid={`${task.name.split(' ').join('-')}-delete`}>
														<i className="material-icons">delete</i>
													</button>
												</div>
											</div>
										</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

/*

.card {
	transition: height 0.5s ease-in-out;
	will-change: height;
}

.card-text {
	min-width: 236px;
	min-height: 350px;
}

h4 {
	display: flex;
	justify-content: center;
}

ul {
	padding-left: 0px;
}

.li-content {
	height: 25px;
}   

*/ 